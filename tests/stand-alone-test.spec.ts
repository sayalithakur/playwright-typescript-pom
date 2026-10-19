import { expect, test } from '@playwright/test'

test("login", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole('link', { name: "Log in" }).click();
    await page.getByRole('textbox', { name: "Email" }).fill("sayali.test@gmail.com");
    await page.getByRole('textbox', { name: "Password" }).fill("Sayali123");
    await page.getByRole('button', { name: "Log in" }).click();
    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
})


test("Stand alone test", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole('link', { name: "Log in" }).click();
    await page.getByRole('textbox', { name: "Email" }).fill("sayali.test@gmail.com");
    await page.getByRole('textbox', { name: "Password" }).fill("Sayali123");
    await page.getByRole('button', { name: "Log in" }).click();
    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await page.getByRole('link', { name: "Computers" }).first().click();
    await page.getByRole('heading', { name: 'Desktops' }).click();
    await page.getByRole('link', { name: 'Build your own cheap computer', exact: true }).click();
    await expect(page.getByText('In stock')).toBeVisible();
    await page.getByRole('radio', { name: 'Fast  [+100.00]' }).click();
    await page.getByRole('radio', { name: "4 GB  [+20.00]" }).click();
    await page.getByRole('checkbox', { name: 'Office Suite  [+100.00]' }).click();
    await page.locator("//input[contains(@id,'addtocart_') and contains(@id,'_EnteredQuantity')]").fill("2");
    await page.locator("//input[contains(@id,'add-to-cart-button-') ]").click();
    await page.locator("//*[@id='topcartlink']/a/span[1]").click();
    await page.locator('#termsofservice').check();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('radio', { name: 'Ground (0.00)' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('radio', { name: 'Cash On Delivery (COD) (7.00' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('strong')).toContainText('Your order has been successfully processed!');
    await page.getByRole('link', { name: 'Click here for order details.' }).click();
})