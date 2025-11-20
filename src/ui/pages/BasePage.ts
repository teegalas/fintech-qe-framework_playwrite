import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async expectTextVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}
