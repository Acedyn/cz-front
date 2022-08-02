export interface TraitStory {
  text: string;
  _id: string;
  index: number;
}

export interface CitizenAttribute {
  value: string;
  type: string;

  selectedStory?: number;
  stories: TraitStory[];
}

export interface Citizen {
  commited: boolean;
  commit: Record<string, number>;
  mint: string;
  edition: number;
  name: string;
  image: string;
  description: string;
  attributes: CitizenAttribute[];
  registered: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  message?: string;
}

export interface MetaplexCitizen {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  edition: number;
  image: string;
  name: string;
  description: string;
  mint: string;
  token: string;
  registered: boolean;
}

export interface NFT {
  registered: boolean;
  updateAuthority: string;
  mint: string;
  name: string;
  symbol: string;
  token: string;
  uri: string;
  creators: {
    address: string;
    verified: boolean;
  }[];
}
