import axios, { AxiosStatic } from "axios";

interface CreateUserRequest {
  username: string;
  password: string;
}

interface LoginUserRequest {
  username: string;
  password: string;
}

interface SetFavoriteBookRequest {
  book: string;
}

// XXX: put in config file
const BASE_URL = "http://localhost:9000";

export class UserService {
  constructor(private readonly client: AxiosStatic = axios) {}

  async loginUser(request: LoginUserRequest): Promise<void> {
    return this.client.post(`${BASE_URL}/login`, request);
  }

  async createUser(request: CreateUserRequest): Promise<void> {
    return this.client.post(`${BASE_URL}/users/new`, request);
  }

  async setFavoriteBook(username: string, bookId: string): Promise<void> {
    const request: SetFavoriteBookRequest = {
      book: bookId,
    };
    this.client.post(`${BASE_URL}/users/${username}/favorites`, request);
  }

  async getFavoriteBook(username: string): Promise<string> {
    const response = await this.client.get(
      `${BASE_URL}/users/${username}/favorites`
    );
    return response.data.data.favorites.book;
  }
}
