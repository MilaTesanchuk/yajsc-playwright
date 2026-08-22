import { test, expect } from '@playwright/test';

test('log in', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    // Log in: fill in email
    await page.getByLabel('Email address *').fill('customer@practicesoftwaretesting.com');
    // Log in: fill in password
    await page.getByLabel('Password *').fill('welcome01');
    // Log in
    await page.locator('.btnSubmit').click();
    //Expect URL
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    // Expect page to have  title
    await expect(page.locator('h1')).toHaveText('My account');
    // Expect user name is present in the menu
    await expect(page.locator('#menu')).toHaveText('Jane Doe');
});
