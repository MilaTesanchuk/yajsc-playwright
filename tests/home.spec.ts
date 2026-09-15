import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { CategoryPowerTools } from '../enums/categories.enum';

test('user can go to product page', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/');
    await homePage.goToProductPage('Combination Pliers');
    // Expect correct URL
    await expect(page).toHaveURL(/\/product\/[A-Za-z0-9]+/);
});

const sortingNameCases = [
    {
        name: 'name Asc',
        sortOption: 'Name (A - Z)',
        sortNames: (a: string, b: string) => a.localeCompare(b)
    },
    {
        name: 'name Desc',
        sortOption: 'Name (Z - A)',
        sortNames: (a: string, b: string) => b.localeCompare(a)
    }
];
for (const { name, sortOption, sortNames } of sortingNameCases) {
    test(`user can sort products by ${name} order`, async ({ page }) => {
        const homePage = new HomePage(page);
        await page.goto('/');
        const responsePromise = page.waitForEvent('response', res =>
            res.url().includes('/products'));
        // Select sort option in drop-down
        await homePage.sortDropDown.selectOption(sortOption);
        // Wait for products to be sorted
        await responsePromise;
        // Find all product names on page
        const productNames = await homePage.getProductNames();
        // sort the products
        const sorted = [...productNames].sort(sortNames);
        expect(productNames).toEqual(sorted);
    });
};

const sortingPriceCases = [
    {
        name: 'Price Asc',
        sortOption: 'Price (Low - High)',
        sortPrices: (a: number, b: number) => a - b
    },
    {
        name: 'Price Desc',
        sortOption: 'Price (High - Low)',
        sortPrices: (a: number, b: number) => b - a
    }
];
for (const { name, sortOption, sortPrices } of sortingPriceCases) {
    test(`user can sort products by ${name}`, async ({ page }) => {
        const homePage = new HomePage(page);

        await page.goto('/');
        const responsePromise = page.waitForEvent('response', res =>
            res.url().includes('/products'));
        // Sort the products    
        await homePage.sortDropDown.selectOption(sortOption);
        // Wait for products to be sorted
        await responsePromise;
        // Get all products' prices
        const productPrices = await homePage.getProductPrices();
        // Sort the products
        const sorted = [...productPrices].sort(sortPrices);
        expect(productPrices).toEqual(sorted);
    });
};

test('user can filter products by category', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/');
    const responsePromise = page.waitForEvent('response', res =>
        res.url().includes('/products'));
    // Select category
    await homePage.selectProductCategory(CategoryPowerTools.sander);
    // Wait for products to filter
    await responsePromise;
    // Get all products' names
    const productNames = await homePage.getProductNames();
    // Expect product name to contain 'sander'
    for (const name of productNames) {
        expect(name).toContain('Sander');
    };
});