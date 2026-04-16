const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// signup
app.post("/auth/signup", (req, res) => {
  const { email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.send("User already exists");

  users.push({ email, password });
  res.send("Signup success 🚀");
});

// login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.send("Invalid credentials");

  res.send("Login success 🚀");
});

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

