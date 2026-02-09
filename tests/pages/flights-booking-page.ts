import { By, Key, until, WebDriver } from "selenium-webdriver";
import { expect } from "chai";

export default class FlightBookingPage {
  private driver: WebDriver;
  private departureFrom = By.css('input[x-ref="fromInput"]');
  private arrivalTo = By.css('input[x-ref="toInput"]');
  private departureDate = By.name("flights_departure_date");
  private alertMessage = By.css('[x-text="alertMessage"]');
  private searchFlightsBtn = By.css("button[type='submit']");
  private datePickerBody = By.css("body");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async selectDepartureFrom(departure: string) {
    await this.driver.wait(until.elementLocated(this.departureFrom), 10000);
    const departureFrom = await this.driver.findElement(this.departureFrom);
    await this.driver.wait(until.elementIsEnabled(departureFrom), 50000);
    await departureFrom.clear();
    await departureFrom.sendKeys(departure, Key.ARROW_DOWN, Key.ENTER);
  }

  async selectArrivalTo(arrival: string) {
    await this.driver.wait(until.elementLocated(this.arrivalTo), 10000);
    const arrivalTo = await this.driver.findElement(this.arrivalTo);
    await this.driver.wait(until.elementIsEnabled(arrivalTo), 50000);
    await arrivalTo.clear();
    await arrivalTo.sendKeys(arrival, Key.ARROW_DOWN, Key.ENTER);
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
    await this.driver.wait(until.elementIsVisible(departureInput), 50000);
    await this.driver.executeScript(
      `arguments[0].value = '${departureDate}';`,
      departureInput,
    );
    await departureInput.sendKeys(Key.TAB);
    const value = await (
      await this.driver.findElement(this.departureDate)
    ).getAttribute("value");
    expect(value).to.include(departureDate);
    await this.driver.findElement(this.datePickerBody).click();
  }

  async clickSearchFlights() {
    await this.driver.wait(until.elementLocated(this.searchFlightsBtn), 10000);
    const searchFlightsBtn = await this.driver.findElement(
      this.searchFlightsBtn,
    );
    if (await searchFlightsBtn.isEnabled()) {
      await searchFlightsBtn.click();
    } else {
      console.log("O botão de busca não está habilitado.");
    }
  }

  async validateAlertMessage() {
    await this.driver.wait(until.elementLocated(this.alertMessage), 10000);
    const alertElement = await this.driver.findElement(this.alertMessage);
    await this.driver.wait(until.elementIsVisible(alertElement), 10000);
    const alert = await alertElement.getText();
    expect(alert).to.equal(
      "Please select both departure and arrival airports!",
    );
  }
}
