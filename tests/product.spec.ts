import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';

test('product page attributes', async ({ page }) => {

    // go to Product Page
    const homePage = new HomePage(page);
    const productPage = await homePage.goToProductPage('Combination Pliers');

    // Expect product name is Combination Pliers
    await expect(productPage.pageTitle).toHaveText('Combination Pliers');
    // Expect product price is 14.15
    await expect(productPage.productPrice).toHaveText('14.15');
    // Expect Add to Cart button is visible
    await expect(productPage.addToCartBtn).toBeVisible();
    // Expect Add to Favorites button to be visible
    await expect(productPage.addToFavBtn).toBeVisible();
});

test('user can add product to cart', async ({ page }) => {
    // go to Product Page
    const homePage = new HomePage(page);
    const productPage = await homePage.goToProductPage('Slip Joint Pliers');
    // Expect product name is "Slip Joint Pliers".
    await expect(productPage.pageTitle).toHaveText('Slip Joint Pliers');
    // Expect product price is 9.17
    await expect(productPage.productPrice).toHaveText('9.17');

    //add product to cart
    await productPage.addToCartBtn.click();
    // Expect alert message is visible
    await expect(productPage.alertMessage).toHaveText('Product added to shopping cart.');
    // Expect alert disappears in 8 seconds
    const slowExpect = expect.configure({ timeout: 8000 });
    await slowExpect(productPage.alertMessage).not.toBeVisible();

    // Click on cart icon
    const cartPage = new CartPage(page);
    await cartPage.cartIcon.click();
    // Expect the number of products in the cart table equals 1
    await expect(cartPage.cartQuantity).toHaveText('1');
    // Verify product name is correct
    await expect(cartPage.productInCart).toHaveText('Slip Joint Pliers');
    // Verify Checkout button is visible
    await expect(cartPage.checkOutBtn).toBeVisible();
});

