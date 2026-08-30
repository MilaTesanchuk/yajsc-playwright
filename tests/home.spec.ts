import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('user can go to product page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToProductPage();

    // Expect URL
    await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product\/[A-Za-z0-9]+/);
});