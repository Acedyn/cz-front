import type User from "./user";

interface NewsData {
  title: string;
  description: string;
  category?: string;
  logo: string;
  image: string;
  users: User[];
  createdAt: number;
  extras?: Record<string, string>;
}

export default class News {
  data: NewsData;

  constructor(data: NewsData) {
    this.data = data;
  }
}
