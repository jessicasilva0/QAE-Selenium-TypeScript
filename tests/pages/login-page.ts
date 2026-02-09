import { By, until, WebDriver } from "selenium-webdriver";
import { BaseURL } from "../utils/base-url";

export default class LoginPage {
  private driver: WebDriver;
  private baseURL = BaseURL;
  private emailAddress = By.id("email");
  private password = By.id("password");
  private signInButton = By.css("button[type='submit']");

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
    await this.driver.wait(until.elementLocated(this.emailAddress), 10000);
    const emailElement = await this.driver.findElement(this.emailAddress);
    await emailElement.sendKeys(email);
  }

  private async inputPassword(password: string) {
    await this.driver.wait(until.elementLocated(this.password), 10000);
    const passwordElement = await this.driver.findElement(this.password);
    await passwordElement.sendKeys(password);
  }

  async clickSignInButton() {
    await this.driver.wait(until.elementLocated(this.signInButton), 10000);
    const loginBtn = await this.driver.findElement(this.signInButton);
    await loginBtn.click();
  }
}
