class JourneyLocators {
    questionAnswer(number) {
        // return $(`(//section//label)[${number}]`);
        return $(`(//label[@class='ant-radio-wrapper css-1588u1j'])[${number}]`);
    }

    // get searchForAnswer(){
    //     return $("//input[@placeholder='Search Options']");
    // }
    // searchedAnswer(answer){
    //     return $(`//label//span[contains(normalize-space(.), '${answer}')]`);
    // }
    get nextButton() {
        return $("//span[normalize-space()='Next']");
    }

    get confirmButton() {
        return $("//span[normalize-space()='Confirm']");
    }
    get procceedButton() {
        return $("//span[normalize-space()='Proceed to Submit']");
    }
    get tentativeDateField() {
        return $('//*[@id="tentativeTravelDate"]');
    }
    get nextYear(){
        return $("//a[@class='ant-picker-now-btn']");
    }
    get selectedDate(){
        return $("//div[normalize-space()='31']");
    }
    get submitButton() {
        return $("//span[normalize-space()='Submit']");
    }
    get random(){
        return $("//h3[@class='ant-typography !mb-1 !text-gray-900 css-1588u1j']");
    }
}
module.exports = new JourneyLocators();