import { Request, Response } from "express";
import Class from "../models/class.models.ts";
export const getClasses = async (req: Request, res: Response) => {
    try {
      const classes = await Class.find()
        .populate("teacher", "name") 
        .populate("studentList"); 
  
      res.status(200).json(classes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching classes" });
    }
  };
  

  export const getClassById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const foundClass = await Class.findById(id)
        .populate("teacher", "name")
        .populate("studentList");
  
      if (!foundClass) {
        return res.status(404).json({ message: "Class not found" });
      }
  
      res.status(200).json(foundClass);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching class" });
    }
  };
  
  export const createClass = async (req: Request, res: Response) => {
    const { name, year, teacher, studentFees, studentList } = req.body;
    try {
      if (!name || !year || !teacher || !studentFees) {
        return res.status(400).json({ message: "All mandatory fields are required" });
      }
  
      const newClass = new Class({
        name,
        year,
        teacher,
        studentFees,
        studentList: studentList || [], 
      });
  
      await newClass.save();
      res.status(201).json({ message: "Class created successfully", newClass });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating class" });
    }
  };
  
  export const updateClass = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, year, teacher, studentFees, studentList } = req.body;
  
    try {
      const updatedClass = await Class.findByIdAndUpdate(
       { _id:id},
        { name, year, teacher, studentFees, studentList },
        { new: true } 
      );
  
      if (!updatedClass) {
        return res.status(404).json({ message: "Class not found" });
      }
  
      res.status(200).json({ message: "Class updated successfully", updatedClass });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating class" });
    }
  };
  
  export const deleteClass = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedClass = await Class.findByIdAndDelete(id);
  
      if (!deletedClass) {
        return res.status(404).json({ message: "Class not found" });
      }
  
      res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting class" });
    }
  };
  