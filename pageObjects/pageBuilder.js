import BlogPage from './webPages/BlogPage';
import ProfilePage from './webPages/ProfilePage';
import MainPage from './webPages/MainPage';

function PageBuilder() {
  const blogPage = new BlogPage();
  const profilePage = new ProfilePage();
  const mainPage = new MainPage();

  return {
    blogPage,
    profilePage,
    mainPage,
  };
}

module.exports = PageBuilder;
