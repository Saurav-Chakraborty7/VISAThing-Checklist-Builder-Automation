const loginLocators = require("./loginLocators");

class LoginActions {
    async enterEmail(email) {
        await loginLocators.emailField.waitForClickable({ timeout: 5000 });
        await loginLocators.emailField.click();
        await loginLocators.emailField.setValue(email);
    }
    async enterPassword(password) {
        await loginLocators.passwordField.waitForClickable({ timeout: 5000 });
        await loginLocators.passwordField.click();
        await loginLocators.passwordField.setValue(password);
    }
    async clickOnLoginButton() {
        await loginLocators.loginButton.waitForClickable({ timeout: 5000 });
        await loginLocators.loginButton.click();
    }
}
module.exports = new LoginActions();