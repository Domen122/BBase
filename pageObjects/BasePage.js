export default class BasePage {
  constructor(browserInstance) {
    this.browser = browserInstance || browser;
    this.$ = this.browser.$;
    this.$$ = this.browser.$$;
    this.element = this.browser.element;
    this.ExpectedConditions = this.browser.ExpectedConditions;
  }

  async sleep(duration) {
    return this.browser.sleep(duration);
  }

  async wait(...condition) {
    return this.browser.wait(...condition);
  }
}

