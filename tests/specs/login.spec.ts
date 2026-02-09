import dotenv from "dotenv";
import {
  loginPage,
  dashboardPage,
  flightBookingPage,
} from "../fixtures/pages-fixtures";
dotenv.config();

const emailAddress = process.env.email;
const password = process.env.password;

describe("Login", () => {
  it("TC-01: Should login page", async () => {
    await loginPage.goToLoginPage();
    await loginPage.insertCredentials(emailAddress!, password!);
    await loginPage.clickSignInButton();
    await dashboardPage.goToFlightBooking();
    await flightBookingPage.selectDepartureAndArrivalDates("", "", "");
  });
});
