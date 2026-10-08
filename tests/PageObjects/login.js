
export class login {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.login = page.locator("#login-button");

    }

    async navigateto(url) {

        await this.page.goto(url);

    }

    async fulluserdetails(username, password) {

        await this.username.fill(username);
        await this.password.fill(password);

    }
    async loginclick() {

        await this.login.click();
    }

    async titledisplay() {
        const title = await this.page.title();
        console.log(title);
    }
}