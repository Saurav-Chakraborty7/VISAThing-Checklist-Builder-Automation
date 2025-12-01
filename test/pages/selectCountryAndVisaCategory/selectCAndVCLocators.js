class SelectCAndVCLocators {
  get countryDropdown() {
    return $("//input[@id='country']");
  }
  get visaCategoryDropdown() {
    return $("//input[@id='visaCategory']");
  }
  get nextButton() {
    return $("//button[@type='submit']");
  }
}
module.exports = new SelectCAndVCLocators();