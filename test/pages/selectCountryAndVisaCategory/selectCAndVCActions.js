const selectCAndVCLocators = require("./selectCAndVCLocators");

class SelectCAndVCActions {
    async clickOnCountryDropdown(countryName) {
        await selectCAndVCLocators.countryDropdown.waitForClickable({ timeout: 5000 });
        await selectCAndVCLocators.countryDropdown.click();
        await selectCAndVCLocators.countryDropdown.setValue(countryName);
        await browser.keys("Enter");
        
    }
    async clickOnVisaCategoryDropdown(visaCategory) {
        await selectCAndVCLocators.visaCategoryDropdown.waitForClickable({ timeout: 5000 });
        await selectCAndVCLocators.visaCategoryDropdown.click()
        await selectCAndVCLocators.visaCategoryDropdown.setValue(visaCategory);
        await browser.keys("Enter");
    }
    async clickOnNextButton() {
        await selectCAndVCLocators.nextButton.waitForClickable({ timeout: 5000 });
        await selectCAndVCLocators.nextButton.click();
    }

}
module.exports = new SelectCAndVCActions();