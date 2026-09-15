import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const authFile = path.join(__dirname, '../playwright/.auth/userLogin.json');

setup('log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    // Log in
    await page.goto('/auth/login');
    await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');
    //Expect URL
    await expect(page).toHaveURL('/account');

    await page.context().storageState({ path: authFile });
});