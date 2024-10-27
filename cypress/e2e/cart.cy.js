import LoginPage from "../pages/LoginPage.js";
import CartPage from "../pages/CartPage.js";
describe("Cart Operations", () => {
  let loginPage = new LoginPage();
  let cartPage = new CartPage();

  beforeEach(() => {
    cy.visit("/");
    loginPage.login("standard_user", "secret_sauce");
  });

  it("should add items to the cart using a custom command", () => {
    cy.addToCart(["Sauce Labs Backpack", "Sauce Labs Bike Light"]);
    cartPage.verifyCartCount(2);
    cartPage.cartOpen();
    cartPage.verifyItemInCart("Sauce Labs Backpack");
    cartPage.verifyItemInCart("Sauce Labs Bike Light");
  });
  it("should proceed to checkout", () => {
    cy.addToCart(["Sauce Labs Backpack"]);
    cartPage.cartOpen();
    cartPage.proceedToCheckout();
    cy.url().should("include", "/checkout-step-one.html");
  });
});
