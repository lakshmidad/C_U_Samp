const ForumPost = require("../models/ForumPost");

exports.createPost = async (req, res) => {
  try {
    const { eventId, studentId, content } = req.body;
    const post = new ForumPost({ eventId, studentId, content });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

exports.getPostsByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const posts = await ForumPost.find({ eventId }).populate("studentId", "name");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to get posts" });
  }
};
