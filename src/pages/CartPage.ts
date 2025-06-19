import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { Item } from '../components/item.component';

export class CartPage extends BasePage {
  private title: Locator;
  private continueShoppingBtn: Locator;
  private checkoutBtn: Locator;
  public item: Item;

  constructor(page: Page) {
    super(page);
    this.item = new Item(page);
    this.title = page.getByTestId('title');
    this.continueShoppingBtn = page.getByTestId('continue-shopping');
    this.checkoutBtn = page.getByTestId('checkout');
  }

  async goToCheckout() {
    await this.checkoutBtn.click();
  }
}
