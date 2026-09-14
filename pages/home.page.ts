import { Page, Locator } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

export class HomePage {
    page: Page;
    sortDropDown: Locator;
    constructor(page: Page) {
        this.page = page;
        this.sortDropDown = this.page.getByTestId('sort');
    }

    async goToProductPage(productName: string): Promise<ProductPage> {
        await this.page.getByText(productName).click();
        return new ProductPage(this.page);
    }

    async getProductNames(): Promise<string[]> {
        return await this.page.getByTestId('product-name').allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page.getByTestId('product-price').allTextContents();
        return prices.map(p => Number(p.replace('$', '')));
    }

    async selectProductCategory(category: string) {
        await this.page.getByLabel(`${category}`).check();
    }
}