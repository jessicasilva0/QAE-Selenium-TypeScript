import { By, until, WebDriver } from "selenium-webdriver";
import { expect } from "chai";

export default class FlightBookingPage {
  private driver: WebDriver;
  private departureFrom = By.css('input[x-ref="fromInput"]');
  private arrivalTo = By.css('input[x-ref="toInput"]');
  private departureDate = By.name("flights_departure_date");
  private alertMessage = By.css('[x-text="alertMessage"]');
  private searchFlightsBtn = By.css("button[type='submit']");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  private async selectDepartureFrom(departure: string) {
    await this.driver.wait(until.elementLocated(this.departureFrom), 10000);
    const departureFrom = await this.driver.findElement(this.departureFrom);
    await this.driver.wait(until.elementIsVisible(departureFrom), 50000);
    await departureFrom.sendKeys(departure);
  }

  private async selectArrivalTo(arrival: string) {
    await this.driver.wait(until.elementLocated(this.arrivalTo), 10000);
    const arrivalTo = await this.driver.findElement(this.arrivalTo);
    await this.driver.wait(until.elementIsVisible(arrivalTo), 50000);
    await arrivalTo.sendKeys(arrival);
  }

  async selectDepartureAndArrivalDates(
    departureFrom: string,
    arrivalTo: string,
    departureDate: string,
  ) {
    await this.selectDepartureFrom(departureFrom);
    await this.selectArrivalTo(arrivalTo);
    await this.departureDateInput(departureDate);

    if (departureFrom === "" || arrivalTo === "") {
      await this.clickSearchFlights();
      await this.validateAlertMessage();
    }
  }

  async departureDateInput(departureDate: string) {
    await this.driver.wait(until.elementLocated(this.departureDate), 10000);
    const departureInput = await this.driver.findElement(this.departureDate);
    await departureInput.isEnabled();
    await departureInput.click();
    await this.driver.executeScript(
      `arguments[0].value = '${departureDate}';`,
      departureInput,
    );
    const value = await (
      await this.driver.findElement(this.departureDate)
    ).getAttribute("value");
    expect(value).to.include(departureDate);
  }

  async clickSearchFlights() {
    const searchFlightsBtn = await this.driver.findElement(
      this.searchFlightsBtn,
    );
    await searchFlightsBtn.click();
  }

  async validateAlertMessage() {
    const alertElement = await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.alertMessage)),
      10000,
    );
    const alert = await alertElement.getText();
    expect(alert).to.equal(
      "Please select both departure and arrival airports!",
    );
  }
}
