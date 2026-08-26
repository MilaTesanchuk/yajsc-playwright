import { test, expect } from '@playwright/test';

test('log in', async ({ page }) => {
    await page.goto('/auth/login');

    // Log in: fill in email
    await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
    // Log in: fill in password
    await page.getByTestId('password').fill('welcome01');
    // Log in
    await page.getByTestId('login-submit').click();
    //Expect URL
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    // Expect page to have  title
    await expect(page.getByTestId('page-title')).toHaveText('My account');
    // Expect user name is present in the menu
    await expect(page.getByTestId('nav-menu')).toHaveText('Jane Doe');
});