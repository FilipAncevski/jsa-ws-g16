const mongoose = require("mongoose");

const Blog = mongoose.model(
  "blogs",
  {
    title: String,
    content: String,
  },
  "blogs"
);

const getAll = async (user_id) => {
  const blogs = await Blog.find({ user_id });
  return blogs;
};

const getSingle = async (user_id, id) => {
  const blog = await Blog.findOne({ user_id, _id: id });
  return blog;
};

const create = async (data) => {
  const blog = new Blog(data);
  return await blog.save();
};

const update = async (id, data) => {
  return await Blog.findByIdAndUpdate({ _id: id }, data);
};

const remove = async (id) => {
  return await Blog.findByIdAndDelete({ _id: id });
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  remove,
};
