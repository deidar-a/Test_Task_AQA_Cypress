Cypress.Commands.add("addToCart", (itemNames) => {
  if (typeof itemNames === "string") {
    itemNames = [itemNames];
  }

  itemNames.forEach((itemName) => {
    cy.contains(".inventory_item_name", itemName)
      .parents(".inventory_item")
      .find("button")
      .click();
  });
});
