import { Page, Locator } from '@playwright/test';

export class Header {
  page: Page;
  private shoppingCart: Locator;
  private burgerMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.getByTestId('shopping-cart-link');
    this.burgerMenu = page.getByTestId('open-menu');
  }

  async clickOnCart() {
    await this.shoppingCart.click();
  }

  async clickOnBurgerMenu() {
    await this.burgerMenu.click();
  }
}
