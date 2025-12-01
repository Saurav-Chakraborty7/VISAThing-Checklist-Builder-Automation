const navigationLocators = require("./navigationLocators");
class NavigationActions {
    async clickOnDocumentChecklist() {
        await navigationLocators.documentChecklist.waitForDisplayed({ timeout: 5000 });
        await navigationLocators.documentChecklist.click();
        await driver.pause(2000);
    }
    async clickOnActionPlan() {
        await navigationLocators.actionPlan.waitForDisplayed({ timeout: 5000 });
        await navigationLocators.actionPlan.click();
        await driver.pause(2000);
    }
    async clickOnCostAnalytics() {
        await navigationLocators.costAnalytics.waitForDisplayed({ timeout: 5000 });
        await navigationLocators.costAnalytics.click();
        await driver.pause(2000);
    }
    async clickOnExpertTips() {
        await navigationLocators.expertTips.waitForDisplayed({ timeout: 5000 });
        await navigationLocators.expertTips.click();
        await driver.pause(2000);
    }
    async clickOnFeedback() {
        await navigationLocators.feedback.waitForDisplayed({ timeout: 5000 });
        await navigationLocators.feedback.click();
        await driver.pause(2000);
    }
}
module.exports = new NavigationActions();