import { Locator, Page, test } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private shoppingCart: Locator;
  private burgerMenu: Locator;
  private productSorting: Locator;
  private addToCartButton: Locator;
  private inventoryItem: Locator;
  private itemName: Locator;

  constructor(page: Page) {
    super(page);
    this.shoppingCart = page.getByTestId('shopping-cart-link');
    this.burgerMenu = page.getByTestId('open-menu');
    this.productSorting = page.getByTestId('product-sort-container');
    this.addToCartButton = page.getByRole('button', { name: 'add to cart' });
    this.inventoryItem = page.getByTestId('inventory-item');
    this.itemName = page.getByTestId('inventory-item-name');
  }
  async clickOnItem(name: string) {
    await this.itemName.filter({ hasText: name }).click();
  }

  async clickOnCart() {
    await this.shoppingCart.click();
  }

  async addItemToTheCart(name: string) {
    const item: Locator = this.inventoryItem.filter({
      has: this.itemName.filter({ hasText: name }),
    });
    await item.getByRole('button', { name: 'add to cart' }).click();
  }
}
