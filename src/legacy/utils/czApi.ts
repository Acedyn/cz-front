import type {
  CZRoutePost,
  CZAPIPostBody,
  CZAPIPostResponse,
  CZRouteGet,
  CZAPIGetParams,
  CZAPIGetResponse,
} from "../types/czApi";

const CZ_API_URL = "https://cardboard-citizens-api.herokuapp.com";
// const CZ_API_URL = "http://localhost:8080";

export async function czPost<R extends CZRoutePost>(
  route: R,
  body: CZAPIPostBody<R>
): Promise<[CZAPIPostResponse<R>, number]> {
  const url = CZ_API_URL + route;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return [await response.json(), response.status];
}

export async function czGet<R extends CZRouteGet>(
  route: R,
  params: CZAPIGetParams<R>
): Promise<[CZAPIGetResponse<R>, number]> {
  const url = params
    ? CZ_API_URL + `${route}?${new URLSearchParams(params)}`
    : CZ_API_URL + route;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return [await response.json(), response.status];
}
