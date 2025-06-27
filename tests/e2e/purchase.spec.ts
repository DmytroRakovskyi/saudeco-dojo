import { expect, Page } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import { standartUser } from '../../src/test-data/test-users';
import { customer } from '../../src/test-data/test-customers';

test.describe('purchase scenarios', { tag: ['@smoke', '@purchase'] }, () => {
  test(
    'SAU-001, success purchase',
    { tag: ['@success'] },
    async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
      await loginPage.goto();
      await loginPage.userLoginIn(standartUser);
      await inventoryPage.addItemToTheCart('backpack');

      await test.step('Verify item is added to the cart', async () => {
        await inventoryPage.header.clickOnCart();
        await expect(cartPage.item.inventoryItemName).toHaveText('Sauce Labs Backpack');
        // refactor for not hardcoded price
        await expect(cartPage.item.inventoryItemPrice).toContainText('29.99');
      });
      await test.step('Checkout and verify checkout itmes', async () => {
        await cartPage.goToCheckout();
        await checkoutPage.fillCheckoutForm(customer);
        await checkoutPage.continueCheckout();
        await expect(checkoutPage.item.inventoryItemName).toHaveText('Sauce Labs Backpack');
        // refactor for not hardcoded price
        await expect(checkoutPage.item.inventoryItemPrice).toContainText('29.99');
        await checkoutPage.finishCheckout();
      });
      await test.step('Verify checkout message', async () => {
        await expect(checkoutPage.checkouteCompleteHeader).toHaveText('Thank you for your order!');
      });
    },
  );
});
