const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const blog = [];

app.use(express.json()); // JSON parse middleware

// 기본 route server status
app.get("/", (req, res) => {
  // res.json({ message: `Server is running on port ${PORT}` });
  return res.send(`Server is running on port ${PORT}`);
});

// Set listen port for request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/blog", (req, res) => {
  res.send({ blog });
});

app.post("/blog", (req, res) => {
  const { title, body } = req.body;

  if (!title) {
    return res.send({ code: 401, message: "타이틀을 입력해주세요." });
  } else if (!body) {
    return res.send({ code: 401, message: "바디값을 입력해주세요." });
  }
  blog.push({ title, body });
  return res.send({ code: 200 });
});
