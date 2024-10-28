import LoginPage from "../pages/LoginPage.js";
import CartPage from "../pages/CartPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
describe("Login", () => {
  let loginPage = new LoginPage();
  let cartPage = new CartPage();
  let checkoutPage = new CheckoutPage();
  beforeEach(() => {
    cy.visit("/");
  });
  it("should load page without errors", () => {
    cy.url().should("include", "saucedemo.com");
    loginPage.getLoginButton().should("be.visible");
  });
  it("should log in with valid credentials", () => {
    loginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });
  it("should throw an error with invalid credentials", () => {
    loginPage.login("standart_user1", "password");
    loginPage
      .getErrorMessageContainer()
      .should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("should log out successfully after completing checkout", () => {
    loginPage.login("standard_user", "secret_sauce");
    cy.addToCart(["Sauce Labs Backpack"]);
    cartPage.cartOpen();
    cartPage.verifyItemInCart("Sauce Labs Backpack");
    cartPage.proceedToCheckout();
    checkoutPage.fillUserInfo("user", "smith", "123432");
    checkoutPage.chkContinue();
    checkoutPage.chkFinish();
    loginPage.logout();
    cy.url().should("eq", "https://www.saucedemo.com/");
    loginPage.getLoginButton().should("be.visible");
    loginPage.getUsernameInput().should("be.visible");
    loginPage.getPasswordInput().should("be.visible");
  });
});
