import { Builder, WebDriver } from "selenium-webdriver";
import LoginPage from "../pages/login-page";

let driver: WebDriver;
export let loginPage: LoginPage;

export async function getDriver() {
  if (!driver) {
    driver = await new Builder().forBrowser("chrome").build();
  }
  return driver;
}

export async function quitDriver() {
  if (driver) {
    await driver.quit();
  }
}

before(async () => {
  driver = await getDriver();
  loginPage = new LoginPage(driver);
});

after(async () => {
  await quitDriver();
});
