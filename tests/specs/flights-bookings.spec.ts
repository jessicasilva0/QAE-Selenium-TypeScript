import dotenv from "dotenv";
import {
  loginPage,
  dashboardPage,
  flightBookingPage,
} from "../fixtures/pages-fixtures";

dotenv.config();

const emailAddress = process.env.email;
const password = process.env.password;

describe("Flights Bookings", () => {
  beforeEach(async () => {
    await loginPage.goToLoginPage();
    await loginPage.insertCredentials(emailAddress!, password!);
    await loginPage.clickSignInButton();
    await dashboardPage.goToFlightBooking();
  });

  it("TC-01: Should show alert when searching flights without departure and arrival", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates("", "", "");
  });

  it("TC-02: Should show alert when searching flights without departure airport", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates("", "LIS", "");
  });

  it("TC-03: Should show alert when searching flights without arrival airport", async () => {
    await flightBookingPage.selectDepartureAndArrivalDates("OPO", "", "");
  });

  it("TC-04: Should allow entering a valid departure date", async () => {
    await flightBookingPage.departureDateInput("15-02-2026");
  });
});
