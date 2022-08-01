import type {
  Citizen,
  MetaplexCitizen,
  TraitStory,
  CitizenAttribute,
} from "../types/citizen";
import { useAnchorWallet } from "solana-wallets-vue";

import { czGet } from "./czApi";
import { mongoGet, mongoPost } from "./mongoApi";

export async function getAttributeStories(
  attribute: MetaplexCitizen["attributes"][number]
): Promise<TraitStory[]> {
  const mongoStories = await mongoGet("/attributes/traits/stories", {
    attribute: attribute.trait_type,
    trait: attribute.value,
  });
  return mongoStories.length > 0
    ? mongoStories
        .sort((a, b) => (a._id > b._id ? 1 : -1))
        .map((mongoStory, index) => {
          return {
            text: mongoStory.story,
            _id: mongoStory._id,
            index,
          };
        })
    : [{ text: "I have nothing to say", _id: "00000", index: 0 }];
}

export async function getOwnedCitizens(): Promise<Citizen[]> {
  const wallet = useAnchorWallet();
  while (!wallet.value) {
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  const [ownedCitizensRaw] = await czGet("/wind/registered", {
    address: wallet.value.publicKey.toString(),
  });
  const ownedCitizensFormated = ownedCitizensRaw
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(async (rawCitizen) => {
      const citienMetadata: MetaplexCitizen = await (
        await fetch(rawCitizen.uri)
      ).json();

      const [commit] = await czGet("/citizen/commit", {
        mint: rawCitizen.mint,
      });
      const attributes: Promise<CitizenAttribute>[] = citienMetadata.attributes
        .sort((a, b) => a.trait_type.localeCompare(b.trait_type))
        .map(async (attribute) => {
          const stories = await getAttributeStories(attribute);
          const filteredStories = stories
            .sort(() => 0.5 - Math.random())
            .filter((_, i) => i < 3);

          return {
            ...attribute,
            type: attribute.trait_type,
            selectedStory: commit[attribute.trait_type.toLowerCase()],
            stories: await mongoPost("/citizen/stories/list", {
              mint: rawCitizen.mint,
              stories: filteredStories,
              type: attribute.trait_type,
            }),
          };
        });

      const attributesResolved = await Promise.all(attributes);
      return {
        ...citienMetadata,
        attributes: attributesResolved,
        commited: attributesResolved.every(
          (a) => a.selectedStory !== undefined
        ),
        commit,
        registered: rawCitizen.registered,
        mint: rawCitizen.mint,
      };
    });

  return await Promise.all(ownedCitizensFormated);
}
