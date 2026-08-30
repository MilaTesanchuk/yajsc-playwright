import { Page, Locator } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

export class HomePage {
    page: Page;
    itemCard: Locator;
    constructor(page: Page) {
        this.page = page;
        this.itemCard = this.page.getByText(' Combination Pliers ');
    }

    async goToProductPage(): Promise<ProductPage> {
        await this.page.goto('/');
        await this.itemCard.click();
        return new ProductPage(this.page);
    }
}