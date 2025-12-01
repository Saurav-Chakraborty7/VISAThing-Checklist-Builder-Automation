const beforeStartLocators = require("./beforeStartLocators");

class BeforeStartActions {
    async clickOnLanguage() {
        await beforeStartLocators.selectLanguage.waitForClickable({ timeout: 5000 });
        await beforeStartLocators.selectLanguage.click();
    }
    async clickOnStart() {
        await beforeStartLocators.startButton.waitForClickable({ timeout: 5000 });
        await beforeStartLocators.startButton.click();
    }
}
module.exports = new BeforeStartActions();