interface MissionData {
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  logo: string;
  class: string;
  reward: number;
  canceled: boolean;
  initialized: boolean;
  closeAt?: number;
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
