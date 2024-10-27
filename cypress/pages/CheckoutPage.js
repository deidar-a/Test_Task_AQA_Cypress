class CheckoutPage {
  fillUserInfo(firstName, lastName, zip) {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(zip);
  }
  verifyUserInfo() {
    cy.get("#first-name").should("have.value", "");
    cy.get("#last-name").should("have.value", "");
    cy.get("#postal-code").should("have.value", "");
  }
  chkContinue() {
    cy.get("#continue").click();
  }
  verifyItemsAndTotalPrice(items, totalPrice) {
    items.forEach((item) => {
      cy.contains(".cart_item", item).should("be.visible");
    });
    cy.get(".summary_subtotal_label").should("contain", totalPrice);
  }
  chkFinish() {
    cy.get("#finish").click();
  }
  verifyChk() {
    cy.contains("Checkout: Complete!").should("be.visible");
  }
}

export default CheckoutPage;
