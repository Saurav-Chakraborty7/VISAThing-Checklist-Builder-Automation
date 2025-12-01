class BeforeStartLocators {
    get selectLanguage() {
        return $("(//button[@class='ant-btn css-1588u1j ant-btn-dashed flex h-auto flex-col items-center justify-center gap-3 p-4'])[1]");
    }
    get startButton() {
        return $("//span[normalize-space()='Get Personalized Visa Checklist Guide']");
    }
}
module.exports = new BeforeStartLocators();