import { test } from '@playwright/test';
import { ConfirmOrder } from '../page-objects/checkout-confirm-order';
import { AddProductToCart } from '../page-objects/add-product';
import { Login } from '../page-objects/login';

test("End to end test flow",  async ({ page }) => {
    const login = new Login(page);
    const addProductToCart = new AddProductToCart(page);
    const confirmOrder = new ConfirmOrder(page);

    await login.goto();
    await login.enterCredentials("sayali.test@gmail.com","Sayali123");
    await addProductToCart.findProduct();
    await addProductToCart.selectDetails();
    await confirmOrder.confirmOrder();



})