const express = require('express');

const app = express();

app.use("/api/posts",(req, res, next) => {
  const posts = [
    {id: '00001', title: "test1", content: "server/api test 1" },
    {id: '00002', title: "test2", content: "server/api test 2" },
    {id: '00003', title: "test3", content: "server/api test 3" }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
