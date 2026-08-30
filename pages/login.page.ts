import { Page, Locator } from "@playwright/test";

export class LoginPage {
    page: Page;
    emailField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    pageTitle: Locator;
    userNameInNav: Locator;
    constructor(page: Page) {
        this.page = page;
        this.emailField = this.page.getByTestId('email');
        this.passwordField = this.page.getByTestId('password');
        this.loginButton = this.page.getByTestId('login-submit');
        this.pageTitle = page.getByTestId('page-title');
        this.userNameInNav = page.getByTestId('nav-menu');
    }

    async performLogin(email: string, password: string): Promise<void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        // Log in
        await this.loginButton.click();
    }
}