interface UserData {
  name: string;
  image: string;
  email: string;
  id: number;
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
