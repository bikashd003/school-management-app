import mongoose,{Schema } from "mongoose";
const classSchema = new Schema({
    className: {
      type: String,
      required: true,
    },
    year: {
      type: Number, 
      required: true,
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: "Teacher", 
      default:undefined
    },
    studentFees: {
      type: Number,
      required: true,
      min: 0, 
    },
    studentListId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student", 
      },
    ],
  });
  const Class = mongoose.model("Class", classSchema);

  export default Class;
  