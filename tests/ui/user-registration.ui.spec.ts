import { test } from '@playwright/test';
import { RegisterPage } from '@pages/RegisterPage';
import { uniqueEmail } from '@utils/dataFactory';

test.describe('User Registration UI', () => {
  test('happy path registration', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.registerUser('John Doe', uniqueEmail('ui'), 'premium');
    await registerPage.expectTextVisible('User created successfully');
  });

  test('invalid email shows validation error', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.registerUser('Bad Email', 'not-an-email', 'basic');
    await registerPage.expectTextVisible('Enter a valid email');
  });
});
