const beforeStartActions = require('../pages/beforeStart/beforestartActions');
const selectCAndVCActions = require('../pages/selectCountryAndVisaCategory/selectCAndVCActions');
const journeyActions = require('../pages/journey/journeyActions');
const utility = require('../utils/utility');
const loginActions = require('../pages/login/loginActions');
const afterJourneyActions = require('../pages/afterJourney/afterJourneyActions');
const navigationActions = require('../pages/navigationAccess/navigationActions');
const navigationLocators = require('../pages/navigationAccess/navigationLocators');
const countryName = "Denmark";
const visaCategory = "Tourism";
const answer = "Russia";
let number;
const email = "workemailvst@gmail.com";
const password = "Asd*123456";
const date = "31-12-2025";

describe('Before starting the Journey', () => {
    it('Should click on Language and Start button', async () => {
        await beforeStartActions.clickOnStart();
        await beforeStartActions.clickOnLanguage();
    })

    it('Should select Country and Visa Category', async () => {
        await selectCAndVCActions.clickOnCountryDropdown(countryName);
        await selectCAndVCActions.clickOnVisaCategoryDropdown(visaCategory);
        await selectCAndVCActions.clickOnNextButton();
    })
});

describe('Starting of the Journey', () => {
    it('Should complete the Journey', async () => {
        //First Question 
        await expect($("//p[contains(text(),'Are you a student?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 2));

        // //Second Question
        await expect($("//p[contains(text(),'Purpose of your travel?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 9));

        // //Third Question
        await expect($("//p[contains(text(),'What type of residency does your invitee have?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 3));
        await driver.pause(500);

        //Fourth Question
        await expect($("//p[contains(text(),'Have you travel any country in recent 10 years?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 2));


        //Fifth Question
        await expect($("//p[contains(text(),'Do you currently have an active bank account?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 2));


        //Sixth Question
        await expect($("//p[contains(text(),'How have you heard about us?')]")).toBeDisplayed();
        await journeyActions.clickOnAnswer(await utility.randomNumber(1, 2));

        await journeyActions.clickOnConfirmButton();

        //Proceed to Submit
        await journeyActions.clickOnProcceedButton();


        //Login Step
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnLoginButton();

        //Filling Personal Details
        await journeyActions.enterTentativeDate(date);
        await journeyActions.clickOnSubmitButton();
        await journeyActions.clickOnSubmitButton();
        await driver.pause(5000);
    })
});

describe('After Completing the Journey', () => {
    it('Complete the payment', async () => {
        await afterJourneyActions.clickOnUnlockButton();
        await afterJourneyActions.clickOnSuccessButton();
        await afterJourneyActions.clickOnPaymentButton();
        await afterJourneyActions.clickOnPaymentSuccessButton();
        await afterJourneyActions.clickOnContinueButton();
    })
    it('Navigate through premium features after payment', async () => {
        await driver.pause(10000);
        
        await utility.scrollIntoView(await navigationLocators.documentChecklist);
        await navigationActions.clickOnDocumentChecklist();

        await utility.scrollIntoView(await navigationLocators.actionPlan);
        await navigationActions.clickOnActionPlan();

        await utility.scrollIntoView(await navigationLocators.costAnalytics);
        await navigationActions.clickOnCostAnalytics();
        
        await utility.scrollIntoView(await navigationLocators.expertTips);
        await navigationActions.clickOnExpertTips();

        await utility.scrollIntoView(await navigationLocators.feedback);
        await navigationActions.clickOnFeedback();
        
        await driver.pause(10000);
    })
});