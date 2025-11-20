import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/register');
  }

  async fillName(name: string) {
    await this.page.fill('input[name="name"]', name);
  }

  async fillEmail(email: string) {
    await this.page.fill('input[name="email"]', email);
  }

  async selectAccountType(type: string) {
    await this.page.selectOption('select[name="accountType"]', type);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
  }

  async registerUser(name: string, email: string, accountType: string) {
    await this.open();
    await this.fillName(name);
    await this.fillEmail(email);
    await this.selectAccountType(accountType);
    await this.submit();
  }
}
