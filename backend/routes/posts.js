const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// @route GET /api/posts
// @desc Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route POST /api/posts
// @desc Create a new post
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        const newPost = new Post({ title, content });
        await newPost.save();
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route DELETE /api/posts/:id
// @desc Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        await post.remove();
        res.json({ message: 'Post removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
