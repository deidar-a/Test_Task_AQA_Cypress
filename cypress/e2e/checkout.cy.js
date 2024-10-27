import LoginPage from "../pages/LoginPage.js";
import CartPage from "../pages/CartPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
describe("Checkout Process", () => {
  let loginPage = new LoginPage();
  let cartPage = new CartPage();
  let checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.visit("/");
    loginPage.login("standard_user", "secret_sauce");
  });

  it("should not pre-fill user information on Checkout", () => {
    cy.addToCart(["Sauce Labs Backpack"]);
    cartPage.cartOpen();
    cartPage.proceedToCheckout();
    checkoutPage.verifyUserInfo(null, null, null);
  });

  it("should fill out user information and proceed to Checkout", () => {
    cy.addToCart(["Sauce Labs Backpack"]);
    cartPage.cartOpen();
    cartPage.proceedToCheckout();
    checkoutPage.fillUserInfo("First Name", "Last Name", "1122332");
    checkoutPage.chkContinue();
    checkoutPage.verifyItemsAndTotalPrice(["Sauce Labs Backpack"], "$29.99");
  });

  it("should submit the checkout and verify Checkout", () => {
    cy.addToCart(["Sauce Labs Backpack"]);
    cartPage.cartOpen();
    cartPage.proceedToCheckout();
    checkoutPage.fillUserInfo("First Name", "Last Name", "1122332");
    checkoutPage.chkContinue();
    checkoutPage.chkFinish();
    checkoutPage.verifyChk();
  });
});
