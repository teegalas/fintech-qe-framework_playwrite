import { expect } from '@playwright/test';

export function expectUserShape(body: any) {
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('name');
  expect(body).toHaveProperty('email');
  expect(body).toHaveProperty('accountType');
}

export function expectTransactionShape(body: any) {
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('amount');
  expect(body).toHaveProperty('type');
  expect(body).toHaveProperty('recipientId');
}
