import Student from "../models/student.models.ts"
import Class from "../models/class.models.ts"; 
import { Request, Response } from "express";
export const createStudent = async (req: Request, res: Response) => {
    const { name, gender, DOB, contactDetails, feesPaid, classId } = req.body;
    try {
      if (!name || !gender || !DOB || !contactDetails || feesPaid === undefined || !classId) {
        return res.status(400).json({ message: "All mandatory fields are required" });
      }
  
      const classExists = await Class.findById(classId);
      if (!classExists) {
        return res.status(404).json({ message: "Class not found" });
      }
  
      const newStudent = new Student({
        name,
        gender,
        DOB,
        contactDetails,
        feesPaid,
        classId,
      });
  
      await newStudent.save();
      res.status(201).json({ message: "Student created successfully", newStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating student" });
    }
  };
  export const getStudents = async (req: Request, res: Response) => {
    try {
      const students = await Student.find().populate("classId", "name year"); // Populate class details
      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching students" });
    }
  };
  export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const foundStudent = await Student.findById(id).populate("classId", "name year");
  
      if (!foundStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.status(200).json(foundStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching student" });
    }
  };
  export const updateStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, gender, DOB, contactDetails, feesPaid, classId } = req.body;
  
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        { name, gender, DOB, contactDetails, feesPaid, classId },
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.status(200).json({ message: "Student updated successfully", updatedStudent });
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
    