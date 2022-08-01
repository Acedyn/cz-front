import type {
  MongoRoutePost,
  MongoAPIPostBody,
  MongoAPIPostResponse,
  MongoRouteGet,
  MongoAPIGetParams,
  MongoAPIGetResponse,
} from "../types/mongoApi";

const MONGO_API_URL = "https://data.mongodb-api.com/app/main-hgnlb/endpoint";

export async function mongoPost<R extends MongoRoutePost>(
  route: R,
  body: MongoAPIPostBody<R>
): Promise<MongoAPIPostResponse<R>> {
  const url = MONGO_API_URL + route;
  return await (
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  ).json();
}

export async function mongoGet<R extends MongoRouteGet>(
  route: R,
  params: MongoAPIGetParams<R>
): Promise<MongoAPIGetResponse<R>> {
  const url = params
    ? MONGO_API_URL + `${route}?${new URLSearchParams(params)}`
    : MONGO_API_URL + route;
  return await (
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ).json();
}
