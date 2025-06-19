import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/header.component';
import { Item } from '../components/item.component';

export class InventoryPage extends BasePage {
  private productSorting: Locator;
  private addToCartButton: Locator;
  private removeFromCartButton: Locator;

  public header: Header;
  public item: Item;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.item = new Item(page);
    this.productSorting = page.getByTestId('product-sort-container');
    this.addToCartButton = page.getByRole('button', { name: 'add to cart' });
    this.removeFromCartButton = page.getByRole('button', { name: 'remove' });
  }
  async clickOnItem(name: string) {
    await this.item.inventoryItem.filter({ hasText: name }).click();
  }

  async addItemToTheCart(name: string) {
    const item: Locator = this.item.inventoryItem.filter({
      has: this.item.inventoryItemName.filter({ hasText: name }),
    });
    await item.getByRole('button', { name: 'add to cart' }).click();
  }

  async removeItemFromTheCart(name: string) {
    const item: Locator = this.item.inventoryItem.filter({
      has: this.item.inventoryItemName.filter({ hasText: name }),
    });
    await item.getByRole('button', { name: 'remove' }).click();
  }
}
