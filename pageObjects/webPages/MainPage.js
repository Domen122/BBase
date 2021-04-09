import BasePage from '../BasePage';
import cssSelectors from '../../constants/cssSelectors';

export default class MainPage extends BasePage {
  constructor() {
    super();
    this.tC1FavouriteCounter = 0;
  }

  getSignInPageLink() {
    return this.$(cssSelectors.mainPage.signInPageLink);
  }

  getLoginInput() {
    return this.$(cssSelectors.mainPage.loginInput);
  }

  getPasswordInput() {
    return this.$(cssSelectors.mainPage.passwordInput);
  }

  getSignInButton() {
    return this.$(cssSelectors.mainPage.signInButton);
  }

  getTab(tab) {
    return this.element(by.cssContainingText(cssSelectors.mainPage.tab, tab));
  }

  getArticlePreview() {
    return this.$(cssSelectors.mainPage.articlePreview);
  }

  getAddToFavouritesButton(index) {
    return this.$(cssSelectors.mainPage.addToFavouriteButton(index));
  }

  getPostFavouriteCounter(index) {
    return this.element(by.css(cssSelectors.mainPage.postFavouriteCounter(index)));
  }

  getUserProfileLink() {
    return this.$(cssSelectors.mainPage.usersProfileLink);
  }

  async clickSignInPageLink() {
    await this.getSignInPageLink().click();
  }

  async clickSignInButton() {
    await this.getSignInButton().click();
  }

  async signIn(user) {
    await this.getSignInPageLink().click();
    await this.browser.wait(this.ExpectedConditions.visibilityOf(this.getLoginInput(), 5000));
    await this.getLoginInput().sendKeys(this.browser.params.users[user].login);
    await this.getPasswordInput().sendKeys(this.browser.params.users[user].password);
    await this.getSignInButton().click();
  }

  async switchTab(tab) {
    await this.getTab(tab).click();
  }

  async waitForArticlesToLoad() {
    await this.browser.wait(this.ExpectedConditions.visibilityOf(this.getArticlePreview(), 5000));
  }

  async waitForProfilePageToLoad() {
    await this.browser.wait(this.ExpectedConditions.visibilityOf(this.getTab('Favorited Articles'), 5000));
  }

  async getPostsNames() {
    const postNames = [];
    const blogPostHeaders = await this.element.all(by.css(cssSelectors.mainPage.blogPostNameHeader));
    for (const header of blogPostHeaders) {
      postNames.push(await header.getText());
    }
    return postNames;
  }

  // saves counter value to mainPage property for further use in assertion step
  async checkPostFavouriteCounter(index) {
    this.tC1FavouriteCounter = parseInt(await this.getPostFavouriteCounter(index).getText());
  }

  async addPostToFavourites(blogPost) {
    const postNames = await this.getPostsNames();
    const postIndex = postNames.findIndex((post) => post === blogPost) + 1;
    await this.checkPostFavouriteCounter(postIndex);
    await this.getAddToFavouritesButton(postIndex).click();
    return this.wasFavouriteCounterIncreased(postIndex);
  }

  async wasFavouriteCounterIncreased(index) {
    return this.tC1FavouriteCounter + 1 === parseInt(await this.getPostFavouriteCounter(index).getText());
  }

  async clickUserProfileLink() {
    await this.getUserProfileLink().click();
    await this.waitForProfilePageToLoad();
  }

  async favouriteListContains(blogPosts) {
    const postNames = await this.getPostsNames();
    return blogPosts.every((blogPost) => postNames.includes(blogPost));
  }
}


