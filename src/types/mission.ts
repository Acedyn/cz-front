import { get } from "@/utils/restClient";
import { useAuthStore } from "@/stores/auth";

const baseUrl = `${import.meta.env.VITE_MISSION_API}`;

interface MissionAPIData {
  name: string;
  short_description: string;
  long_description: string;
  category: string;
  logo: string;
  class: string;
  reward: number;
  canceled: boolean;
  initialized: boolean;
  close_at: number;
  parameters?: Record<string, string>;
  id: number;
}

interface MissionData {
  name: string;
  id: number;
  shortDescription: string;
  longDescription: string;
  category: string;
  image?: string;
  logo: string;
  class: string;
  reward: number;
  canceled: boolean;
  initialized: boolean;
  closeAt?: Date;
  parameters?: Record<string, string>;
}

interface MissionColors {
  hex: string;
  hue: number;
}

const COLOR_MAPPING: Record<string, MissionColors> = {
  discord: {
    hex: "#6BCAFF",
    hue: 150,
  },
  twitter: {
    hex: "#6b71ff",
    hue: 180,
  },
  event: {
    hex: "#75BC74",
    hue: 50,
  },
  default: {
    hex: "#C0590E",
    hue: 0,
  },
};

export default class Mission {
  data: MissionData;

  constructor(data: MissionData) {
    this.data = data;
  }

  getColors = () => {
    const colors = COLOR_MAPPING[this.data.category];
    return colors || COLOR_MAPPING.default;
  };
}

const fromApiData = (missionApiData: MissionAPIData) => {
  return new Mission({
    ...missionApiData,
    shortDescription: missionApiData.short_description,
    longDescription: missionApiData.long_description,
    closeAt: new Date(missionApiData.close_at),
    image:
      missionApiData.parameters?.image || "/src/assets/landing/profile/01.png",
  });
};

export const getAvailableMissions = async () => {
  const { currentUser } = useAuthStore();

  if (!currentUser.data) {
    const response: { data: MissionAPIData[] } = await get(
      `${baseUrl}/missions/opened`,
      null
    );
    return response.data.map(fromApiData);
  }

  const response: { data: MissionAPIData[] } = await get(
    `${baseUrl}/missions/available?user=${currentUser.data.id}`,
    null
  );
  return response.data.map(fromApiData);
};

export const getCompletedMissions = async () => {
  const { currentUser } = useAuthStore();

  if (!currentUser.data) {
    return [];
  }

  const response: { data: MissionAPIData[] } = await get(
    `${baseUrl}/missions/completed?user=${currentUser.data.id}`,
    null
  );
  return response.data.map(fromApiData);
};

export const validateMission = async (mission: Mission) => {
  const { currentUser } = useAuthStore();

  const response: { errors: string[] } = await get(
    `${baseUrl}/missions/${mission.data.id}/validate?user=${currentUser.data.id}`,
    null
  );
  return response.errors.length < 1;
};
