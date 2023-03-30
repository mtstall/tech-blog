const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    console.log("you're hitting the new comment route");
    const newComment = await Comment.create({
      postId: req.body.postId,
      commentContent: req.body.body,
      userId: req.session.userId,
    });
    res.json(newComment);
    console.log("new comment created");
  } catch (err) {
    console.log("you're hitting the catch block");
    res.status(500).json(err);
  }
});

module.exports = router;
