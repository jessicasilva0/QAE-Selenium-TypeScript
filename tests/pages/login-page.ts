import { By, WebDriver, until, WebElementPromise } from "selenium-webdriver";
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

  async inputUsername(email: string) {
    await this.driver.findElement(this.emailAddress).sendKeys(email);
  }

  async inputPassword(password: string) {
    await this.driver.findElement(this.password).sendKeys(password);
  }

  async clickSignInButton() {
    await this.driver.findElement(this.signInButton).click();
  }
}
