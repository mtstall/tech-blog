const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      postId: req.body.postId,
      commentContent: req.body.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
