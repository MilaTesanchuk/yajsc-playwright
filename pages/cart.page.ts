import { Page, Locator } from "@playwright/test";

export class CartPage {
    page: Page;
    cartQuantity: Locator;
    checkOutBtn: Locator;
    productInCart: Locator;
    cartIcon: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cartQuantity = this.page.getByTestId('cart-quantity');
        this.checkOutBtn = this.page.getByTestId('proceed-1');
        this.productInCart = this.page.getByTestId('product-title');
        this.cartIcon = this.page.getByTestId('nav-cart');
    }
}