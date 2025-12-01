const journeyLocators = require("./journeyLocators");

class JourneyActions {
    async clickOnAnswer(number) {
        await journeyLocators.questionAnswer(number).waitForClickable({ timeout: 5000 });
        await journeyLocators.questionAnswer(number).click();
        await driver.pause(2000);
    }
    async clickOnNextButton() {
        await journeyLocators.nextButton.click();
        //await driver.pause(5000);
    }
    async clickOnConfirmButton() {
        await journeyLocators.confirmButton.click();
        //await driver.pause(5000);
    }
    async clickOnProcceedButton() {
        await journeyLocators.procceedButton.click();
        //await driver.pause(10000);
    }
    async clickOnRandom() {
        await journeyLocators.random.click();
    }
    async clickOnNextYear() {
        await journeyLocators.nextYear.click();
    }
    async clickOnSelectedDate() {
        await journeyLocators.selectedDate.click();
    }

    async enterTentativeDate(date) {
        await journeyLocators.tentativeDateField.waitForClickable({ timeout: 5000 });

        // Set value using JavaScript
        await browser.execute((value) => {
            const element = document.getElementById('tentativeTravelDate');
            element.value = value;

            // Trigger necessary events
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
            element.dispatchEvent(new Event('blur', { bubbles: true }));
        }, date);

        await driver.pause(500);

        // Click to ensure focus and trigger validation
        await journeyLocators.tentativeDateField.click();
        await journeyLocators.tentativeDateField.setValue(date);
        await driver.pause(500);
    }

    async clickOnSubmitButton() {
        await journeyLocators.submitButton.waitForClickable({ timeout: 5000 });
        await journeyLocators.submitButton.click();
    }
}
module.exports = new JourneyActions();