class LoginPage {
  getUsernameInput() {
    return cy.get("#user-name");
  }
  getPasswordInput() {
    return cy.get("#password");
  }
  getLoginButton() {
    return cy.get("#login-button");
  }
  getErrorMessageContainer() {
    return cy.get(".error-message-container");
  }
  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
  logout() {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  }
}
export default LoginPage;
