const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  const token = jwt.sign(
    { name, email },
    "Qlfnh9L7qvb1J5P4k6KSOwnskwMP6bNQlJrtoapKYAX",
    {
      expiresIn: "1h",
    },
  );
  res.json({
    message: "User registered successfully",
    data: {
      user: { name, email },
    },
    token,
  });
});

module.exports = app;
