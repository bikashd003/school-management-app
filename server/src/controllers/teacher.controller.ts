import Student from "../models/student.models.ts";
import teacher from "../models/teacher.models.ts";
import { Request, Response } from "express";

export const createTeacher = async (req: Request, res: Response) => {
  const { teacherName, gender, DOB, contactDetails, salary,assignClass } = req.body;
  try {
    if (!teacherName || !gender || !DOB || !contactDetails || !salary) {
      return res.status(400).json({ message: "All fields are required" }); 
    }

    const existingTeacher = await teacher.findOne({ teacherName });
    if (existingTeacher) {
      return res.status(409).json({ message: "Teacher already exists" }); 
    }

    const newTeacher = new teacher({
      teacherName,
      gender,
      DOB, 
      contactDetails,
      salary,
      assignedClass:assignClass || []
    });

    await newTeacher.save();
    res.status(201).json({ message: "Teacher created successfully" }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating teacher" });
  }
};


export const getTeacher = async (req: Request, res: Response) => {
  try {
    const teachers = await teacher.find().populate("assignedClass","className");
    res.status(200).json(teachers);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTeacher = await teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      res.status(404).json({ message: "teacher not found" });
    }
    res.status(200).json({ message: "teacher deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, gender, dob, contactDetails, salary } = req.body;

  try {
    const updatedTeacher = await teacher.findByIdAndUpdate(
     {_id:id},
      { name, gender, DOB: dob, contactDetails, salary },
      {
        new: true,
      }
    );
    if (!updatedTeacher) {
      res.status(404).json({ message: "teacher not found" });
    }
    res.status(200).json({ message: "teacher updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};
export const getExpenses = async (req: Request, res: Response) => {
  try {
    // Extract view type (monthly or yearly), month, and year from the query parameters
    const { viewType, month, year } = req.query;

    if (!year) {
      return res.status(400).json({ message: 'Year is required' });
    }

    let startDate: Date;
    let endDate: Date;

    if (viewType === 'monthly') {
      if (!month) {
        return res.status(400).json({ message: 'Month is required for monthly view' });
      }
      const parsedMonth = parseInt(month as string, 10) - 1;
      const parsedYear = parseInt(year as string, 10);

      startDate = new Date(parsedYear, parsedMonth, 1); 
      endDate = new Date(parsedYear, parsedMonth + 1, 0); 
    } else {
      const parsedYear = parseInt(year as string, 10);

      startDate = new Date(parsedYear, 0, 1); 
      endDate = new Date(parsedYear, 11, 31); 
    }

    const teacherSalaries = await teacher.aggregate([
      {
        $match: { employmentStartDate: { $lte: endDate } }, 
      },
      {
        $group: {
          _id: null,
          totalSalaries: { $sum: "$salary" },
        },
      },
    ]);

    const totalTeacherSalary = teacherSalaries[0]?.totalSalaries || 0;

    const studentFees = await Student.aggregate([
      {
        $match: {
          paymentDate: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          totalFees: { $sum: "$feesPaid" }, 
        },
      },
    ]);

    const totalStudentFees = studentFees[0]?.totalFees || 0;

    res.status(200).json({
      totalTeacherSalary,
      totalStudentFees,
    });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Error fetching expenses" });
  }
};