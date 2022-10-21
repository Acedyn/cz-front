import { useAuthStore } from "@/stores/auth";

const authHeader = (url: string): Record<string, string> => {
  const { getUser, isLoggedIn } = useAuthStore();
  const isApiUrl = url.startsWith(import.meta.env.VITE_AUTH_API);
  if (isLoggedIn() && isApiUrl) {
    console.log(getUser());
    return { Authorization: `Bearer ${getUser().data.tokens.accessToken}` };
  } else {
    return {};
  }
};

const request = (method: string) => {
  return async (url: string, body: Record<string, string> | null) => {
    const requestOptions = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    const response = await fetch(url, requestOptions);
    return await response.json();
  };
};

export const get = request("GET");
export const post = request("POST");
export const put = request("PUT");
export const del = request("DELETE");
