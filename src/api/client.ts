import { APIRequestContext } from '@playwright/test';
import { env } from '@config/env';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(path: string) {
    return this.request.get(env.API_BASE_URL + path);
  }

  async post(path: string, body: any) {
    return this.request.post(env.API_BASE_URL + path, {
      data: body,
    });
  }
}
