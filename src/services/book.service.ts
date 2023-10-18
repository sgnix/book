import axios, { AxiosStatic } from "axios";
import { Book } from "../models/Book";

export interface ListBooksResponse {
  books: Array<Book>;
}

const BASE_URL = "http://localhost:9000";

export class BookService {
  constructor(private readonly client: AxiosStatic = axios) {}

  async getBooks(): Promise<ListBooksResponse> {
    const response = await this.client.get(`${BASE_URL}/books`);
    return response.data.data;
  }
}
