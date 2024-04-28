import Student from "../models/student.models.ts";
import Class from "../models/class.models.ts";
import { Request, Response } from "express";
export const createStudent = async (req: Request, res: Response) => {
  const { name, gender, DOB, contactDetails, feesPaid, classId } = req.body;
  try {
    if (!name || !gender || !DOB || !contactDetails || feesPaid === undefined) {
      return res
        .status(400)
        .json({ message: "All mandatory fields are required" });
    }
    const newStudent = new Student({
      name,
      gender,
      DOB,
      contactDetails,
      feesPaid,
      classId: classId === "" ? undefined : classId,
    });

    await newStudent.save();

    if (classId != "") {
      await Class.findByIdAndUpdate(
        { _id: classId },
        {
          $push: { studentListId: newStudent._id },
        }
      );
    }
    res
      .status(201)
      .json({ message: "Student created successfully", newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating student" });
  }
};
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find().populate("classId", "className");
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching students" });
  }
};
export const getStudentsByPage = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip =
      (parseInt(page as string, 10) - 1) * parseInt(limit as string, 10);

    const totalStudents = await Student.countDocuments();
    const students = await Student.find()
      .populate("classId", "className")
      .skip(skip)
      .limit(parseInt(limit as string, 10));

    res.status(200).json({
      students,
      currentPage: parseInt(page as string, 10),
      totalPages: Math.ceil(totalStudents / parseInt(limit as string, 10)),
      totalStudents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching students" });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, gender, DOB, contactDetails, feesPaid, classId } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      { _id: id },
      { name, gender, DOB, contactDetails, feesPaid, classId },
      { new: true }
    );
    await Class.findByIdAndUpdate(
      { _id: classId },
      { $push: { studentListId: id } }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res
      .status(200)
      .json({ message: "Student updated successfully", updatedStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating student" });
  }
};
export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting student" });
  }
};
