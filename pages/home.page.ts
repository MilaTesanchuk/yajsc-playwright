import { Page, Locator } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

export class HomePage {
    page: Page;
    //productName: string;
    constructor(page: Page) {
        this.page = page;
        // this.productName = 'Combination Pliers';
    }

    async goToProductPage(productName: string): Promise<ProductPage> {
        await this.page.goto('/');
        await this.page.getByText(productName).click();
        return new ProductPage(this.page);
    }
}