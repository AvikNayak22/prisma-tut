const prisma = require("../db/db.config.js");

export const fetchComments = async (req, res) => {
  const comments = await prisma.comment.findMany({
    include: {
      user: true,
      post: {
        include: {
          user: true,
        },
      },
      orderBy: {
        id: "desc",
      },
    },
  });
  return res.json({ status: 200, data: comments });
};

export const createComment = async (req, res) => {
  const { user_id, post_id, comment } = req.body;

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment: comment,
    },
  });

  return res.json({
    status: 200,
    data: newComment,
    message: "Comment created successfully",
  });
};

export const showComment = async (req, res) => {
  const commentId = req.params.id;
  const comment = await prisma.comment.findFirst({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({ status: 200, data: comment });
};

//update the user
export const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const { user_id, post_id, comment } = req.body;

  await prisma.comment.update({
    where: {
      id: Number(commentId),
    },
    data: {
      user_id,
      post_id,
      comment,
    },
  });

  return res.json({ status: 200, message: "Comment updated successfully" });
};

//DeleteUser
export const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  const { post_id } = req.body;

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        decrement: 1,
      },
    },
  });

  await prisma.comment.delete({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({ status: 200, message: "Comment deleted successfully" });
};
