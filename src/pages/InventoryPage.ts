import { Locator, Page, test } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/header.component';

export class InventoryPage extends BasePage {
  private productSorting: Locator;
  private addToCartButton: Locator;
  private inventoryItem: Locator;
  private itemName: Locator;
  public header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.productSorting = page.getByTestId('product-sort-container');
    this.addToCartButton = page.getByRole('button', { name: 'add to cart' });
    this.inventoryItem = page.getByTestId('inventory-item');
    this.itemName = page.getByTestId('inventory-item-name');
  }
  async clickOnItem(name: string) {
    await this.itemName.filter({ hasText: name }).click();
  }

  async addItemToTheCart(name: string) {
    const item: Locator = this.inventoryItem.filter({
      has: this.itemName.filter({ hasText: name }),
    });
    await item.getByRole('button', { name: 'add to cart' }).click();
  }

  async removeItemFromTheCart(name: string) {
    const item: Locator = this.inventoryItem.filter({
      has: this.itemName.filter({ hasText: name }),
    });
    await item.getByRole('button', { name: 'remove' }).click();
  }
}
