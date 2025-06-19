import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '../types/user';

export class LoginPage extends BasePage {
  private userNameInput: Locator;
  private passwordInput: Locator;
  private logInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.logInButton = page.getByTestId('login-button');
  }

  async userLoginIn(user: User) {
    await this.userNameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.clickOnLogin();
  }

  private async clickOnLogin() {
    await this.logInButton.click();
  }
}
