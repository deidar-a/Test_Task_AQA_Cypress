
# Cypress E2E Testing Project for SauceDemo

This project automates end-to-end testing for the [SauceDemo](https://www.saucedemo.com/) website using Cypress. Key functionalities covered include login, cart operations, checkout flow, and logout.

## Prerequisites

Before starting, ensure you have the following installed on your machine:
- **Node.js** (v12 or higher)
- **npm** (usually comes with Node.js)

## Project Setup

### 1. Clone the Repository

Clone this repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Install Cypress and other necessary packages:
```bash
npm install
```


## Test Coverage

The test suite is organized by feature and includes the following scenarios:

1. **Login Page**:
   - Verify that the login page loads successfully.
   - Confirm successful login with valid credentials.
   - Confirm login failure and error message with invalid credentials.

2. **Cart Operations**:
   - Use a custom Cypress command to add items to the cart.
   - Add multiple items and verify the cart icon reflects the correct item count.

3. **Checkout Flow**:
   - **Proceed to Checkout**: Validate that items added to the cart are displayed correctly.
   - **User Information Page**: Verify correct user information is pre-filled.
   - **Checkout Overview**: Ensure items and total price (with tax) are accurately displayed.
   - **Checkout Completion**: Confirm successful order placement with a confirmation message.

4. **Logout**:
   - Navigate back to the main page and log out successfully.

## Usage

1. **Run Tests in Cypress UI**:
   ```bash
   npx cypress open
   ```

2. **Run Tests in Headless Mode**:
   ```bash
   npx cypress run
   ```

## Key Cypress Techniques Used

- Custom commands for reusability (e.g., `addToCart`).
- Assertions to validate expected application behavior.

---

This project aims to streamline testing for SauceDemo and demonstrate efficient Cypress practices.
``` 
