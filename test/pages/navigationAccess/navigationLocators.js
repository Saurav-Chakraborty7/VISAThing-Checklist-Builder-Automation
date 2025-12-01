class NavigationLocators {
    get documentChecklist() {
        return $("//div[normalize-space()='Document Checklist']");
    }
    get actionPlan() {
        return $("//div[normalize-space()='Action Plan']");
    }
    get costAnalytics() {
        return $("//div[normalize-space()='Cost Analytics']");
    }
    get expertTips() {
        return $("//div[normalize-space()='Expert Tips']");
    }
    get feedback() {
        return $("//div[normalize-space()='Feedback']");
    }
}
module.exports = new NavigationLocators();