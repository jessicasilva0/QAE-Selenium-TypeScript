import dotenv from "dotenv";
import { loginPage, dashboardPage } from "../fixtures/pages-fixtures";

dotenv.config();

const emailAddress = process.env.email;
const password = process.env.password;

describe("Login", () => {
  it("TC-01: Should open login page when navigating to base URL", async () => {
    await loginPage.goToLoginPage();
  });

  it("TC-02: Should login successfully with valid credentials and display dashboard", async () => {
    await loginPage.goToLoginPage();
    await loginPage.insertCredentials(emailAddress!, password!);
    await loginPage.clickSignInButton();
    await dashboardPage.validateRecentBookingScreen();
  });
});
