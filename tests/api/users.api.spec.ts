import { test, expect } from '@playwright/test';
import { ApiClient } from '@api/client';
import { UserService } from '@api/services';
import { expectUserShape } from '@utils/assertions';

test.describe('User API', () => {
  test('create user (happy path)', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);

    const { res, payload } = await userService.createUser();
    expect(res.status()).toBe(201);

    const body = await res.json();
    expectUserShape(body);
    expect(body.email).toBe(payload.email);
  });

  test('get user by id', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);

    const { res: createRes } = await userService.createUser();
    const created = await createRes.json();

    const getRes = await userService.getUser(created.id);
    expect(getRes.status()).toBe(200);

    const body = await getRes.json();
    expectUserShape(body);
    expect(body.id).toBe(created.id);
  });

  test('missing email returns validation error', async ({ request }) => {
    const client = new ApiClient(request);
    const userService = new UserService(client);

    const { res } = await userService.createUser({ email: '' as any });
    expect([400, 422]).toContain(res.status());
  });
});
