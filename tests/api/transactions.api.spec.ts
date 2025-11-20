import { test, expect } from '@playwright/test';
import { ApiClient } from '@api/client';
import { UserService, TransactionService } from '@api/services';
import { expectTransactionShape } from '@utils/assertions';

test.describe('Transaction API', () => {
  test('create transaction for user', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);
    const txService = new TransactionService(client);

    const { res: userRes } = await userService.createUser();
    const user = await userRes.json();

    const { res: txRes, payload } = await txService.createTransaction(user.id);
    expect(txRes.status()).toBe(201);

    const body = await txRes.json();
    expectTransactionShape(body);
    expect(body.userId).toBe(user.id);
    expect(body.amount).toBe(payload.amount);
  });

  test('list transactions for user', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);
    const txService = new TransactionService(client);

    const { res: userRes } = await userService.createUser();
    const user = await userRes.json();

    await txService.createTransaction(user.id, { amount: 50 });
    await txService.createTransaction(user.id, { amount: 80 });

    const listRes = await txService.listForUser(user.id);
    expect(listRes.status()).toBe(200);

    const listBody = await listRes.json();
    expect(Array.isArray(listBody)).toBe(true);
    expect(listBody.length).toBeGreaterThanOrEqual(2);
  });

  test('reject negative amount', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);
    const txService = new TransactionService(client);

    const { res: userRes } = await userService.createUser();
    const user = await userRes.json();

    const { res } = await txService.createTransaction(user.id, { amount: -10 });
    expect([400, 422]).toContain(res.status());
  });
});
