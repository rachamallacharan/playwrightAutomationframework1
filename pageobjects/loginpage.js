import { test, expect } from '@playwright/test';

export class loginpage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("//input[@data-qa='login-email']");
        this.password = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.locator("//button[@data-qa='login-button']");

    }

    async enterUserandPassword(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }



}