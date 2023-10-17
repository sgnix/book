import axios, { AxiosStatic } from "axios";
import { Book } from "./book.model";

interface CreateUserRequest {
  username: string;
  password: string;
}

interface CreateUserResponse {
  message: string;
}

export class APIService {
  constructor(private readonly client: AxiosStatic = axios) {}

  public async getBooks(): Promise<Book[]> {
    const response = await this.client.get<Book[]>("/books");
    return response.data;
  }

  public async createUser(
    username: string,
    password: string,
  ): Promise<CreateUserResponse> {
    const request: CreateUserRequest = { username, password };
    const response = await this.client.post<any>(`/users/new`, request);
    return response.data;
  }
}

export default new APIService();
