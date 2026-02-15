import dotenv from "dotenv";
import { loginPage, dashboardPage, getDriver, quitDriver } from "../fixtures/pages-fixtures";

dotenv.config();

const emailAddress = process.env.email;
const password = process.env.password;

describe("Login", () => {
  beforeEach(async () => {
    await getDriver();
    await loginPage.goToLoginPage();
  });

  it("TC-01: Should login unsuccessfully with invalid credentials", async () => {
    await loginPage.insertCredentials(
      "invalid-email@gmail.com",
      "invalid-password",
    );
    await loginPage.clickSignInButton();
    await loginPage.errorMessageCredentials();
  });

  it("TC-02: Should login successfully with valid credentials and display dashboard", async () => {
    await loginPage.insertCredentials(emailAddress!, password!);
    await loginPage.clickSignInButton();
    await dashboardPage.validateRecentBookingScreen();
  });

  afterEach(async () => {
    await quitDriver();
  });
});
