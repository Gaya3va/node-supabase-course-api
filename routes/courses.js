const express = require("express");
const router = express.Router();

const supabase = require("../supabaseClient");
const validateEnrollment = require("../middleware/validateEnrollment");


//  GET all courses
router.get("/courses", async (req, res) => {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});


//  POST enroll student
router.post("/enroll", validateEnrollment, async (req, res) => {
  const { student_name, course_id } = req.body;

  const { data, error } = await supabase
    .from("enrollments")
    .insert([{ student_name, course_id }]);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    message: "Student enrolled successfully",
    data
  });
});


// GET enrollments for course
router.get("/courses/:id/enrollments", async (req, res) => {
  const courseId = req.params.id;

  const { data, error } = await supabase
    .from("enrollments")
    .select("*")
    .eq("course_id", courseId);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

module.exports = router;