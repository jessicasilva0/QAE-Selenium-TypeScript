import { By, until, WebDriver } from "selenium-webdriver";
import { expect } from "chai";

export default class DashboardPage {
  private driver: WebDriver;
  private dashboard = By.css("h2.text-xl");
  private servicesMenu = By.css("span.material-symbols-outlined");
  private flightsBooking = By.css('a[href*="/flights"]');

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async validateRecentBookingScreen() {
    await this.driver.wait(until.elementLocated(this.dashboard), 10000);
    const heading = this.driver.findElement(this.dashboard);
    const headingText = await heading.getText();
    expect(headingText).to.equal("Recent Bookings");
  }

  async clickServicesOptions() {
    await this.driver.wait(until.elementLocated(this.servicesMenu), 5000);
    const expandServices = await this.driver.findElement(this.servicesMenu);
    await expandServices.click();
  }

  async clickFlightsBooking() {
    await this.driver.wait(until.elementLocated(this.flightsBooking), 10000);
    const flightsLink = await this.driver.findElement(this.flightsBooking);
    expect(await flightsLink.getText()).to.include("Flights Booking");
    await flightsLink.click();
  }

  async goToFlightBooking() {
    await this.validateRecentBookingScreen();
    await this.clickServicesOptions();
    await this.clickFlightsBooking();
  }
}
