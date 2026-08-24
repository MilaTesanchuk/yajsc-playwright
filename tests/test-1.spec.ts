import { test, expect } from '@playwright/test';

test('log in', async ({ page }) => {
    await page.goto('/auth/login');

    // Log in: fill in email
    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    // Log in: fill in password
    await page.locator('[data-test="password"]').fill('welcome01');
    // Log in
    await page.locator('[data-test="login-submit"]').click();
    //Expect URL
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    // Expect page to have  title
    await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');
    // Expect user name is present in the menu
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Jane Doe');
});