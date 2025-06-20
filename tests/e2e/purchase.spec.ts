import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

import { standartUser } from '../../src/test-data/test-users';
import { customer } from '../../src/test-data/test-customers';

test.describe('purchase scenarios', { tag: ['@smoke', '@purchase'] }, () => {
  test(
    'SAU-001, success purchase',
    { tag: ['@smoke', '@success', '@purchase'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);

      await loginPage.goto();
      await loginPage.userLoginIn(standartUser);
      await inventoryPage.addItemToTheCart('backpack');
      await inventoryPage.header.clickOnCart();
      await expect(cartPage.item.inventoryItemName).toHaveText('Sauce Labs Backpack');
      await expect(cartPage.item.inventoryItemPrice).toContainText('29.99');
      await cartPage.goToCheckout();
      await checkoutPage.fillCheckoutForm(customer);
      await checkoutPage.continueCheckout();
      await expect(checkoutPage.item.inventoryItemName).toHaveText('Sauce Labs Backpack');
      await expect(checkoutPage.item.inventoryItemPrice).toContainText('29.99');
      await checkoutPage.finishCheckout();
      await expect(checkoutPage.checkouteCompleteHeader).toHaveText('Thank you for your order!');
    },
  );
});
