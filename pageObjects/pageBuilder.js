import BlogPage from './webPages/BlogPage';
import ProfilePage from './webPages/ProfilePage';

function PageBuilder() {
  const blogPage = new BlogPage();
  const profilePage = new ProfilePage();

  return {
    blogPage,
    profilePage,
  };
}

module.exports = PageBuilder;
