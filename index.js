const express = require("express");
const app = express();
const cors = require("cors"); // cors require kore newa holo
const port = process.env.PORT || 5000; // hoi 5000 port kinva onno kono port e ta run korbe
app.use(cors()); // client site data access korar jonnne use kora holo locally
const courses = require("./fakedata/courses.json"); //// fake data variable set kora holo

const coursesDeatails = require("./fakedata/coursesdetails.json"); // fake data variable set kora holo
app.get("/courses", (req, res) => {
  res.send(courses); // shokol dornoer course Show korbe
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = coursesDeatails.find(
    (course) => (course.coursesid = id) // jodi Id ar courses id mileh jai tahole shei id related course details show korbe
  );
  res.send(selectedCourses);
});
app.listen(port, () => {
  console.log(`Port is running Succesfully 😍😍😍😍 on ${port}`); // koto number porta theke run hobe server ta show korbe
});
