const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});
app.get("/api/test", (req, res) => {
  res.json({
    message: "GET request working",
    status: "success"
  });
});
app.post("/api/user", (req, res) => {
  const userData = req.body;
  res.json({
    message: "POST request received successfully",
    data: userData
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
