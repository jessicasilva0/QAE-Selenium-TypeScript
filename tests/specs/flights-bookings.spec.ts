import dotenv from "dotenv";
import {
  loginPage,
  dashboardPage,
  flightBookingPage,
  getDriver,
  quitDriver,
} from "../fixtures/pages-fixtures";
import * as testData from "../utils/test-data";

dotenv.config();

const emailAddress = process.env.email;
const password = process.env.password;

describe("Flights Bookings", () => {
  beforeEach(async () => {
    await getDriver();
    await loginPage.goToLoginPage();
    await loginPage.insertCredentials(emailAddress!, password!);
    await loginPage.clickSignInButton();
    await dashboardPage.goToFlightBooking();
  });

  afterEach(async () => {
    await quitDriver();
  });

  it("TC-01: Should show alert when searching flights without departure and arrival", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates("", "", "");
  });

  it("TC-02: Should show alert when searching flights without departure airport", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates(
      "",
      testData.departureInfo.arrivalTo,
      "",
    );
  });

  it("TC-03: Should show alert when searching flights without arrival airport", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates(
      testData.departureInfo.departureFrom,
      "",
      "",
    );
  });

  it("TC-04: Should allow entering a valid departure date", async () => {
    await flightBookingPage.departureDateInput(
      testData.departureInfo.departureDate,
    );
  });
});
