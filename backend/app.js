const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://JoshSevy:fPIL43YFPB8L3hsM@cluster0.nfscr.mongodb.net/sociallyAwkward?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to Database!')
  })
  .catch(() => {
    console.log("Connection Failed!")
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/posts",(req, res, next) => {
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
