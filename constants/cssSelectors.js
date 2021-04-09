const cssSelectors = {
  mainPage: {
    signInPageLink: '.nav-link[routerLink="/login"]',
    loginInput: '.form-control[placeholder="Username"]',
    passwordInput: '.form-control[placeholder="Password"]',
    signInButton: '.btn-primary',
    tab: '.nav-link',
    articlePreview: '.article-preview',
    addToFavouriteButton: (index) => `app-article-list-item:nth-of-type(${index}) .btn`,
    postFavouriteCounter: (index) => `app-article-list-item:nth-of-type(${index}) .btn > .info`,
    blogPostNameHeader: '.preview-link > h1',
    usersProfileLink: '.navbar-nav > .nav-item:nth-child(2)',
  },
};

export default cssSelectors;
