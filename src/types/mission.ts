import { get } from "@/utils/restClient";
import { useAuthStore } from "@/stores/auth";

const baseUrl = `${import.meta.env.VITE_MISSION_API}`;

interface MissionAPIData {
  name: string;
  short_description: string;
  long_description: string;
  category: string;
  image?: string;
  logo: string;
  class: string;
  reward: number;
  canceled: boolean;
  initialized: boolean;
  close_at: number;
  parameters?: Record<string, string>;
}

interface MissionData {
  name: string;
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

export const getAvailableMissions = async () => {
  const response: { data: MissionAPIData[] } = await get(
    `${baseUrl}/missions/opened`,
    null
  );
  return response.data.map((missionData) => {
    return new Mission({
      ...missionData,
      longDescription: missionData.long_description,
      shortDescription: missionData.short_description,
      closeAt: new Date(missionData.close_at),
    });
  });
};
