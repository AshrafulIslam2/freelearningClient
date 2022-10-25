const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World with ashraful islam");
});
app.listen(port, () => {
  console.log(`Port is running Succesfully 😍😍😍😍 on ${port}`);
});
