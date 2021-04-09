require('@babel/register');
require('core-js/stable');
require('regenerator-runtime');


const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const loginConfig = require('./loginConfig.json');


exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/**/*.feature',
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: './steps/**/*.js',
    tags: '@BBase',
  },

  params: loginConfig,

  beforeLaunch: async () => {
    global.expect = chai.expect;
  },

  onPrepare: async () => {
    const PageBuilder = require('./pageObjects/PageBuilder');
    global.pageObj = PageBuilder();
    const loginPage = loginConfig['login-page'];
    const loginURL = 'https://' + loginPage.login + ':' + loginPage.password + '@' + loginPage.url;
    browser.get(loginURL);
  },
};
