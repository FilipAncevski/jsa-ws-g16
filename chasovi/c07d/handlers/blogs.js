const { create, getAll, getSingle, remove, update } = require("../pkg/blogs");
const { validate, Blog, BlogPartical } = require("../pkg/blogs/validate");

const getAllBlogs = async (req, res) => {
  try {
    const b = await getAll(req.user.id);
    return res.status(200).send(b);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getOneBlog = async (req, res) => {
  try {
    const b = await getSingle(req.user.id, req.params.id);
    return res.status(200).send(b);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const createBlog = async (req, res) => {
  try {
    await validate(req.body, Blog);
    const data = {
      ...req.body,
      user_id: req.user.id,
    };
    const b = await create(data);
    return res.status(201).send(b);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateBlog = async (req, res) => {
  try {
    await validate(req.body, Blog);
    const data = {
      ...req.body,
      user_id: req.user.id,
    };
    await update(req.params.id, data);
    return res.status(204).send("");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateBlogPartial = async (req, res) => {
  try {
    await validate(req.body, BlogPartical);
    const data = {
      ...req.body,
      user_id: req.user.id,
    };
    const b = await update(req.params.id, data);
    return res.status(204).send("");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const deleteBlog = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(204).send("");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllBlogs,
  getOneBlog,
  createBlog,
  updateBlog,
  updateBlogPartial,
  deleteBlog,
};
