const withAuth = (req, res, next) => {
    // TODO: If the user is not logged in, redirect the user to the login page
    // this is directly from the 'gallery/:id' and '/painting/:id' routes
    if(!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;