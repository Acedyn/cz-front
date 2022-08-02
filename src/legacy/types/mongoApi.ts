import type { TraitStory } from "./citizen";

export interface MongoStoryCommit {
  citizen: string;
  attribute: string;
  trait: string;
  story: string;
}

export interface MongoAPIPostRoutes {
  "/citizen/stories/commit": {
    response: {
      insertedId: string;
    }[];
    body: MongoStoryCommit[];
  };
  "/citizen/stories/list": {
    response: TraitStory[];
    body: {
      mint: string;
      type: string;
      stories: TraitStory[];
    };
  };
}

export interface MongoAPIGetRoutes {
  "/attributes/traits/stories": {
    response: {
      attribute: string;
      trait: string;
      story: string;
      _id: string;
    }[];
    params: {
      attribute: string;
      trait: string;
    };
  };
}

export type MongoRoutePost = keyof MongoAPIPostRoutes;
export type MongoAPIPostResponse<R extends keyof MongoAPIPostRoutes> =
  MongoAPIPostRoutes[R]["response"];
export type MongoAPIPostBody<R extends keyof MongoAPIPostRoutes> =
  MongoAPIPostRoutes[R]["body"];

export type MongoRouteGet = keyof MongoAPIGetRoutes;
export type MongoAPIGetResponse<R extends keyof MongoAPIGetRoutes> =
  MongoAPIGetRoutes[R]["response"];
export type MongoAPIGetParams<R extends keyof MongoAPIGetRoutes> =
  MongoAPIGetRoutes[R]["params"];
