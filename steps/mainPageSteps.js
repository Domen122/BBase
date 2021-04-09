import {Given, When, Then} from '@cucumber/cucumber';

const {mainPage} = pageObj;

Given('I log in as {string}', async function(user) {
  await mainPage.signIn(user);
});

Given('I switch to {string} tab', async function(tab) {
  await mainPage.switchTab(tab);
  await mainPage.waitForArticlesToLoad();
});

When('I add blog post {string} to favourites its counter should increase', async function(blogPost) {
  const wasFavouriteCounterIncreased = await mainPage.addPostToFavourites(blogPost);
  return expect(wasFavouriteCounterIncreased).equal(true);
});

When('I go to users profile page', async function() {
  await mainPage.clickUserProfileLink();
});

Then('Favourites list contains', async function(blogPosts) {
  const blogPostsContained = await mainPage.favouriteListContains(blogPosts.rawTable[0]);
  return expect(blogPostsContained).equal(true);
});
