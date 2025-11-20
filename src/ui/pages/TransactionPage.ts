import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransactionPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/transactions/new');
  }

  async fillUserId(userId: string) {
    await this.page.fill('input[name="userId"]', userId);
  }

  async fillAmount(amount: number) {
    await this.page.fill('input[name="amount"]', amount.toString());
  }

  async selectType(type: string) {
    await this.page.selectOption('select[name="type"]', type);
  }

  async fillRecipient(recipientId: string) {
    await this.page.fill('input[name="recipientId"]', recipientId);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
  }

  async createTransactionFlow(
    userId: string,
    amount: number,
    type: string,
    recipientId: string
  ) {
    await this.open();
    await this.fillUserId(userId);
    await this.fillAmount(amount);
    await this.selectType(type);
    await this.fillRecipient(recipientId);
    await this.submit();
  }
}
