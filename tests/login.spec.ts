import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('log in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/auth/login');
    // Log in
    await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

    //Expect URL
    await expect(page).toHaveURL('/account');
    // Expect page to have  title
    await expect(loginPage.pageTitle).toHaveText('My account');
    // Expect user name is present in the menu
    await expect(loginPage.userNameInNav).toHaveText('Jane Doe');
});