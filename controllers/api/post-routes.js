const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// create new post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ 
      title: body.title,
      userId: req.session.userId,
      postContent: body.body,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
