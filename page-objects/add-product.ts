import { expect, Locator, Page } from "@playwright/test";

export class AddProductToCart{
    readonly page: Page;
    readonly computers: Locator;
    readonly desktops: Locator;
    readonly selectComputer: Locator;
    readonly inStock : Locator;
    readonly fastRadioButton: Locator;
    readonly gbRadioButton: Locator;
    readonly ofcSuiteCheckbox : Locator;
    readonly quantityInputBox: Locator;
    readonly addToCartButton: Locator;


    constructor(page : Page){
        this.page = page;
        this.computers =  page.getByRole('link', { name: "Computers" }).first();
        this.desktops = page.getByRole('heading', { name: 'Desktops' });
        this.selectComputer = page.getByRole('link', { name: 'Build your own cheap computer', exact: true });
        this.inStock = page.getByText('In stock');
        this.fastRadioButton=  page.getByRole('radio', { name: 'Fast  [+100.00]' });
        this.gbRadioButton = page.getByRole('radio', { name: "4 GB  [+20.00]" });
        this.ofcSuiteCheckbox =  page.getByRole('checkbox', { name: 'Office Suite  [+100.00]' });
        this.quantityInputBox = page.locator("//input[contains(@id,'addtocart_') and contains(@id,'_EnteredQuantity')]");
        this.addToCartButton = page.locator("//input[contains(@id,'add-to-cart-button-') ]");
    }

    async findProduct(){
        await this.computers.click();
        await this.desktops.click();
        await this.selectComputer.click();
        await expect(this.inStock).toBeVisible();
    }

    async selectDetails(){
        await this.fastRadioButton.click();
        await this.gbRadioButton.click();
        await this.ofcSuiteCheckbox.click();
        await this.quantityInputBox.fill("2");
        await this.addToCartButton.click();
    }

}