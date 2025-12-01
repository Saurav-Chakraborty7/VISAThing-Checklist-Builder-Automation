const afterJourneyLocators = require("./afterJourneyLocators");
class AfterJourneyActions {
    async clickOnUnlockButton() {
        await afterJourneyLocators.unlockButton.waitForDisplayed({ timeout: 5000 });
        await afterJourneyLocators.unlockButton.click();
    }
    async clickOnSuccessButton() {
        await afterJourneyLocators.successButton.waitForClickable({ timeout: 5000 });
        await afterJourneyLocators.successButton.click();
    }
    async clickOnPaymentButton() {
        await afterJourneyLocators.paymentButton.waitForClickable({ timeout: 5000 });
        await afterJourneyLocators.paymentButton.click();
    }
    async clickOnPaymentSuccessButton() {
        await afterJourneyLocators.paymentSuccessButton.waitForClickable({ timeout: 5000 });
        await afterJourneyLocators.paymentSuccessButton.click();
        await driver.pause(5000);
    }
    async clickOnContinueButton() {
        await afterJourneyLocators.continueButton.waitForDisplayed({ timeout: 5000 });
        await afterJourneyLocators.continueButton.click();
    }
}
module.exports = new AfterJourneyActions();