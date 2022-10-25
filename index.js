const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require("./fakedata/courses.json");
const coursesDeatails = require("./fakedata/coursesdetails.json");

app.get("/", (req, res) => {
  res.send("Hello World with ashraful islam");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = coursesDeatails.find(
    (course) => (course.coursesid = id)
  );
  res.send(selectedCourses);
});
app.listen(port, () => {
  console.log(`Port is running Succesfully 😍😍😍😍 on ${port}`);
});
