import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentsByPage,
} from "../controllers/student.controller.ts";

const studentRouter = Router();

// Route for creating a new student
studentRouter.route("/create-student").post(createStudent);

// Route for fetching all students
studentRouter.route("/get-students").get(getStudents);

// Route for fetching all students by page
studentRouter.route("/get-students-by-page").get(getStudentsByPage);


// Route for updating a specific student by ID
studentRouter.route("/update-student/:id").put(updateStudent);

// Route for deleting a specific student by ID
studentRouter.route("/delete-student/:id").delete(deleteStudent);

export default studentRouter;
