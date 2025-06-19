import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { Item } from '../components/item.component';
import { Customer } from '../types/customer';

export class CheckoutPage extends BasePage {
  private title: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private postalCode: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private cancelButton: Locator;
  readonly checkouteCompleteHeader: Locator;
  readonly checkouteCompleteMessage: Locator;
  private backHomeButton: Locator;

  item: Item;

  constructor(page: Page) {
    super(page);
    this.item = new Item(page);
    this.title = page.getByTestId('title');
    this.firstName = page.getByTestId('firstName');
    this.lastName = page.getByTestId('lastName');
    this.postalCode = page.getByTestId('postalCode');
    this.cancelButton = page.getByTestId('cancel');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.checkouteCompleteHeader = page.getByTestId('complete-header');
    this.checkouteCompleteMessage = page.getByTestId('complete-text');
    this.backHomeButton = page.getByTestId('back-to-products');
  }

  async fillCheckoutForm(customer: Customer) {
    await this.firstName.fill(customer.fistName);
    await this.lastName.fill(customer.lastName);
    await this.postalCode.fill(customer.postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async cancelCheckout() {
    await this.cancelButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async backHome() {
    await this.backHomeButton.click();
  }
}
