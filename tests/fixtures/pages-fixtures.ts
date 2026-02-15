import { Builder, WebDriver } from "selenium-webdriver";
import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard-page";
import FlightBookingPage from "../pages/flights-booking-page";

let driver: WebDriver | undefined;
export let loginPage!: LoginPage;
export let dashboardPage!: DashboardPage;
export let flightBookingPage!: FlightBookingPage;

/**
 * Initialize the driver and page objects
 */
export async function getDriver() {
  if (!driver) {
    driver = await new Builder().forBrowser("chrome").build();
    loginPage = new LoginPage(driver);
    dashboardPage = new DashboardPage(driver);
    flightBookingPage = new FlightBookingPage(driver);
  }
  return driver;
}

/**
 * Quit the driver
 */
export async function quitDriver() {
  if (driver) {
    await driver.quit();
    driver = undefined;
  }
}
