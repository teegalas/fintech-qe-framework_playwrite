import { test } from '@playwright/test';
import { TransactionPage } from '@pages/TransactionPage';

test.describe('Transaction UI flow', () => {
  test('happy path transaction', async ({ page }) => {
    const txPage = new TransactionPage(page);

    await txPage.createTransactionFlow('123', 100.5, 'transfer', '456');
    await txPage.expectTextVisible('Transaction created');
  });

  test('invalid amount shows error', async ({ page }) => {
    const txPage = new TransactionPage(page);

    await txPage.createTransactionFlow('123', -1, 'transfer', '456');
    await txPage.expectTextVisible('Amount must be positive');
  });
});
