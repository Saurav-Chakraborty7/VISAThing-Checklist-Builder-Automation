class LoginLocators {

    get emailField() {
        return $("//input[@placeholder='Email']");
    }
    get passwordField() {
        return $("//input[@placeholder='Password']");
    }
    get loginButton() {
        return $("//span[normalize-space()='Log in']");
    }
}
module.exports = new LoginLocators();