import { get } from "@/utils/restClient";

const authUrl = `${import.meta.env.VITE_AUTH_API}`;
const missionsUrl = `${import.meta.env.VITE_MISSION_API}`;

interface MissionUserAPIData {
  points: number;
  id: number;
}

interface UserAPIData {
  name: string;
  image: string;
  email: string;
  id: number;
}

interface UserData {
  name: string;
  image: string;
  email: string;
  id: number;
  points: number;
  tokens: {
    refreshToken: string;
    accessToken: string;
  };
}

export default class User {
  data: Partial<UserData>;

  constructor(data: Partial<UserData>) {
    this.data = data;
  }
}

const fromApiData = async (userApiData: UserAPIData) => {
  const response = await get(`${authUrl}/users/${userApiData.id}`, null);
  return new User({
    ...userApiData,
    ...response,
    name: response.nickname,
  });
};

export const getTopUsers = async () => {
  const response: { data: UserAPIData[] } = await get(
    `${missionsUrl}/users/leaderboard`,
    null
  );
  return await Promise.all(response.data.map(fromApiData));
};
