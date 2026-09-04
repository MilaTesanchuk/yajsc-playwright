import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'
import { ProductPage } from '../pages/product.page';

test('product name is Combination Pliers', async ({ page }) => {

    // go to Product Page
    const homePage = new HomePage(page);
    const productPage = await homePage.goToProductPage();

    // Expect product name is Combination Pliers
    await expect(productPage.pageTitle).toHaveText('Combination Pliers');

    // Expect product price is 14.15
    await expect(productPage.productPrice).toHaveText('14.15');

    // Expect Add to Cart button is visible
    await expect(productPage.addToCartBtn).toBeVisible();

    // Expect Add to Favorites button to be visible
    await expect(productPage.addToFavBtn).toBeVisible();
});

