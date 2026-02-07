import { loginPage } from "../fixtures/pages-fixtures";

describe("Login", () => {
  it("TC-01: Should login page", async () => {
    await loginPage.goToLoginPage();
    await loginPage.insertCredentials("test", "pass");
    await loginPage.clickSignInButton();
  });
});
