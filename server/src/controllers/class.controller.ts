import { Request, Response } from "express";
import Class from "../models/class.models.ts";
export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.find()
      .populate("teacherId", "teacherName")
      .populate('studentListId');
      console.log(classes)
    res.status(200).json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching classes" });
  }
};


export const createClass = async (req: Request, res: Response) => {
  const { className, year, teacher, studentFees, studentList } = req.body;
  try {
    if (!className || !year || !studentFees) {
      return res
        .status(400)
        .json({ message: "All mandatory fields are required" });
    }

    const newClass = new Class({
      className,
      year,
      teacherId: teacher === "" ? undefined : teacher,
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
  const { name, year, teacher, studentFees } = req.body;

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      { _id: id },
      { name, year, teacherId:teacher, studentFees },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res
      .status(200)
      .json({ message: "Class updated successfully", updatedClass });
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
