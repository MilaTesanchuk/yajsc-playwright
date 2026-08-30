import { Page, Locator } from "@playwright/test";

export class ProductPage {
    page: Page;
    pageTitle: Locator;
    productPrice: Locator;
    addToCartBtn: Locator;
    addToFavBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageTitle = this.page.getByTestId('product-name');
        this.productPrice = this.page.getByTestId('unit-price');
        this.addToCartBtn = this.page.getByTestId('add-to-cart');
        this.addToFavBtn = this.page.getByTestId('add-to-favorites');
    }
}