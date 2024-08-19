const prisma = require("../db/db.config.js");

export const fetchPosts = async (req, res) => {
  const posts = await prisma.post.findMany({});
  return res.json({ status: 200, data: posts });
};

export const createUser = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({
    status: 200,
    data: newPost,
    message: "Post created successfully",
  });
};

//Show User
export const showUser = async (req, res) => {
  const postId = req.params.id;
  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, data: post });
};

//update the user
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { user_id, title, description } = req.body;

  await prisma.post.update({
    where: {
      id: Number(postId),
    },
    data: {
      user_id,
      title,
      description,
    },
  });

  return res.json({ status: 200, message: "Post updated successfully" });
};

//DeleteUser
export const deleteUser = async (req, res) => {
  const postId = req.params.id;

  await prisma.post.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, message: "Post deleted successfully" });
};
