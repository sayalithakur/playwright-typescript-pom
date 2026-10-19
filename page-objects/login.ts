import { expect, Locator, Page } from "@playwright/test";

export class Login{
    readonly page : Page;
    readonly loginButton: Locator;
    readonly emailInputbox: Locator;
    readonly passwordInputbox: Locator;
    readonly loginButton2: Locator;
    readonly logoutButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.loginButton = page.getByRole('link', { name: "Log in" });
        this.emailInputbox = page.getByRole('textbox', { name: "Email" });
        this.passwordInputbox = page.getByRole('textbox', { name: "Password" });
        this.loginButton2 = page.getByRole('button', { name: "Log in" });
        this.logoutButton = page.getByRole('link', { name: "Log out" });
    }

    async goto(){
        await this.page.goto("https://demowebshop.tricentis.com/");
    }

    async enterCredentials(email:string, password:string){
        await this.loginButton.click();
        await this.emailInputbox.fill(email);
        await this.passwordInputbox.fill(password);
        await this.loginButton2.click();
        await expect(this.logoutButton).toBeVisible();
    }
}