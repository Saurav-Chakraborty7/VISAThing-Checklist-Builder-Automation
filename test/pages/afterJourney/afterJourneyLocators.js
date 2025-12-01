class AfterJourneyLocators {
    get unlockButton() {
        return $("//button[@class='ant-btn css-1588u1j ant-btn-primary ant-btn-lg h-12 px-8 text-base font-semibold shadow-lg']");
    }
    get successButton() {
        return $("//input[@value='Success']");
    }
    get paymentButton() {
        return $('//*[@id="tab_1"]/a[2]/img');
    }
    get paymentSuccessButton() {
        return $("(//button[@type='submit'])[3]");
    }
    get continueButton() {
        return $("//button[@class='ant-btn css-1588u1j ant-btn-primary ant-btn-lg']");
    }
}
module.exports = new AfterJourneyLocators();