import { Page, Locator } from '@playwright/test';

export class Item {
  page: Page;
  readonly inventoryItem: Locator;
  readonly inventoryItemName: Locator;
  readonly inventoryItemQuantity: Locator;
  readonly inventoryItemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = page.getByTestId('inventory-item');
    this.inventoryItemName = page.getByTestId('inventory-item-name');
    this.inventoryItemQuantity = page.getByTestId('item-quantity');
    this.inventoryItemPrice = page.getByTestId('inventory-item-price');
  }

  async itemClickAddToCart(name: string) {
    const getItem: Locator = this.inventoryItem.filter({
      has: this.inventoryItemName.filter({ hasText: name }),
    });
    await getItem.getByRole('button', { name: 'add to cart' }).click();
  }

  async itemClickRemoveFromCart(name: string) {
    const getItem: Locator = this.inventoryItem.filter({
      has: this.inventoryItemName.filter({ hasText: name }),
    });
    await getItem.getByRole('button', { name: 'remove' }).click();
  }
}
