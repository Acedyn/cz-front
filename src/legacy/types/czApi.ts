import type { NFT } from "./citizen";

export interface CZAPIPostRoutes {
  "/wind/register": {
    response: {
      insertedId: string;
      message: string;
    };
    body: {
      address: string;
      signature: number[];
      message: string;
    };
  };
  "/wind/register-ledger": {
    response: {
      insertedId: string;
      message: string;
    };
    body: {
      address: string;
    };
  };
}

export type CZRoutePost = keyof CZAPIPostRoutes;
export type CZAPIPostResponse<R extends keyof CZAPIPostRoutes> =
  CZAPIPostRoutes[R]["response"];
export type CZAPIPostBody<R extends keyof CZAPIPostRoutes> =
  CZAPIPostRoutes[R]["body"];

export interface CZAPIGetRoutes {
  "/citizens/metadata": {
    response: NFT[];
    params: {
      owner: string;
    };
  };
  "/citizen/token": {
    response: {
      address: string;
    };
    params: {
      mint: string;
    };
  };
  "/citizen/commit": {
    response: Record<string, number>;
    params: {
      mint: string;
    };
  };
  "/wind/registered": {
    response: NFT[];
    params: {
      address: string;
    };
  };
}

export type CZRouteGet = keyof CZAPIGetRoutes;
export type CZAPIGetResponse<R extends keyof CZAPIGetRoutes> =
  CZAPIGetRoutes[R]["response"];
export type CZAPIGetParams<R extends keyof CZAPIGetRoutes> =
  CZAPIGetRoutes[R]["params"];
