import { By, until, WebDriver } from "selenium-webdriver";
import { BaseURL } from "../utils/base-url";
import { expect } from "chai";

export default class LoginPage {
  private driver: WebDriver;
  private baseURL = BaseURL;
  private emailAddress = By.id("email");
  private password = By.id("password");
  private signInButton = By.css("button[type='submit']");
  private alertError = By.css(".alert-error p");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async goToLoginPage() {
    await this.driver.get(this.baseURL.url);
  }

  async insertCredentials(emailAddress: string, password: string) {
    await this.inputUsername(emailAddress);
    await this.inputPassword(password);
  }

  private async inputUsername(email: string) {
    await this.driver.wait(until.elementLocated(this.emailAddress), 50000);
    const emailElement = await this.driver.findElement(this.emailAddress);
    await emailElement.sendKeys(email);
  }

  private async inputPassword(password: string) {
    await this.driver.wait(until.elementLocated(this.password), 50000);
    const passwordElement = await this.driver.findElement(this.password);
    await passwordElement.sendKeys(password);
  }

  async clickSignInButton() {
    await this.driver.wait(until.elementLocated(this.signInButton), 10000);
    const loginBtn = await this.driver.findElement(this.signInButton);
    await loginBtn.click();
  }

  async errorMessageCredentials() {
    await this.driver.wait(until.elementLocated(this.alertError), 20000);
    const alertElement = await this.driver.findElement(this.alertError);
    await this.driver.wait(until.elementIsVisible(alertElement), 20000);
    const errorAlert = await alertElement.getText();
    expect(errorAlert).to.equal("Error Invalid Credentials");
  }
}
