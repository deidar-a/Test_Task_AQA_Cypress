class CartPage {
  cartOpen() {
    cy.get(".shopping_cart_link").click();
  }
  verifyItemInCart(itemName) {
    cy.contains(".cart_item", itemName).should("be.visible");
  }
  proceedToCheckout() {
    cy.get(".checkout_button").click();
  }
  verifyCartCount(count) {
    cy.get(".shopping_cart_badge").should("contain", count);
  }
}
export default CartPage;
