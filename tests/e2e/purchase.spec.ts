import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { standartUser } from '../../src/test-data/test-users';

test.describe('purchase scenarios', { tag: ['@smoke', '@purchase'] }, () => {
  test('success purchase', { tag: ['@smoke', '@success', '@purchase'] }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.userLoginIn(standartUser);
    await inventoryPage.addItemToTheCart('backpack');
    await inventoryPage.header.clickOnCart();
  });
});
