import mongoose,{Schema } from "mongoose";
const classSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number, 
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher", 
      required: true,
    },
    studentFees: {
      type: Number,
      required: true,
      min: 0, 
    },
    studentList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student", 
        required: true,
      },
    ],
  });
  const Class = mongoose.model("Class", classSchema);

  export default Class;
  