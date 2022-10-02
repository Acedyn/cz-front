interface UserData {
  name: string;
  image: string;
}

export default class User {
  data: UserData;

  constructor(data: UserData) {
    this.data = data;
  }
}
