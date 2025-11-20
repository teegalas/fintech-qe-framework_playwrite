import { ApiClient } from './client';
import { routes } from './routes';
import { buildUser, buildTransaction } from '@utils/dataFactory';

export class UserService {
  constructor(private readonly client: ApiClient) {}

  async createUser(overrides?: Parameters<typeof buildUser>[0]) {
    const payload = buildUser(overrides);
    const res = await this.client.post(routes.users, payload);
    return { res, payload };
  }

  async getUser(id: string) {
    return this.client.get(routes.userById(id));
  }
}

export class TransactionService {
  constructor(private readonly client: ApiClient) {}

  async createTransaction(
    userId: string,
    overrides?: Parameters<typeof buildTransaction>[1]
  ) {
    const payload = buildTransaction(userId, overrides);
    const res = await this.client.post(routes.transactions, payload);
    return { res, payload };
  }

  async listForUser(userId: string) {
    return this.client.get(routes.transactionsByUser(userId));
  }
}
