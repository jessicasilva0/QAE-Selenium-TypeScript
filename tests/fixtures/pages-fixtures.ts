import { Builder, WebDriver } from "selenium-webdriver";
import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard-page";
import FlightBookingPage from "../pages/flights-booking-page";

let driver: WebDriver;
export let loginPage: LoginPage;
export let dashboardPage: DashboardPage;
export let flightBookingPage: FlightBookingPage;

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
  dashboardPage = new DashboardPage(driver);
  flightBookingPage = new FlightBookingPage(driver);
});

after(async () => {
  await quitDriver();
});
