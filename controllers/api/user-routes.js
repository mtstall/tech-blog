const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/allusers', async (req, res) => {
  try {
    const userData = await User.findAll({});
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// finding/validating login info
router.post('/login', async (req, res) => {
  try {
    console.log("inside login route")
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //console.log(user);

    if (!user) {
      //console.log("error");
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    console.log("hello")
    const validPassword = await user.checkPassword(req.body.password);
    console.log(validPassword);

    if (!validPassword) {
      console.log("invalid password");
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user: user, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log("catch block");
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
