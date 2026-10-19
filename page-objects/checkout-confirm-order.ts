import { Locator, Page, expect} from "@playwright/test";

export class ConfirmOrder {

    readonly page : Page;
    readonly shoppingCartButton: Locator;
    readonly termServiceCheckBox: Locator;
    readonly checkoutButton: Locator;
    readonly continueButton: Locator;
    readonly selectGround: Locator;
    readonly selectCOD: Locator;
    readonly confirmButton: Locator;
    readonly confirmText: Locator;
    readonly orderDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCartButton = page.locator("//*[@id='topcartlink']/a/span[1]");
        this.termServiceCheckBox = page.locator('#termsofservice');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.selectGround = page.getByRole('radio', { name: 'Ground (0.00)' });
        this.selectCOD = page.getByRole('radio', { name: 'Cash On Delivery (COD) (7.00' });
        this.confirmButton = page.getByRole('button', { name: 'Confirm' })
        this.confirmText = page.getByRole('strong');
        this.orderDetails = page.getByRole('link', { name: 'Click here for order details.' });
    }

    async confirmOrder() {
        await this.shoppingCartButton.click();
        await this.termServiceCheckBox.check();
        await this.checkoutButton.click();
        await this.continueButton.click();
        await this.continueButton.click();
        await this.selectGround.check();
        await this.continueButton.click();
        await this.selectCOD.check();
        await this.continueButton.click();
        await this.continueButton.click();
        await this.confirmButton.click();
        await this.page.waitForTimeout(2000);
        await expect(this.confirmText).toContainText('Your order has been successfully processed!' , { timeout: 15000 });
        await this.orderDetails.click();
    }
}