import mongoose,{ Schema } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"], 
  },
  DOB: {
    type: Date,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  feesPaid: {
    type: Number,
    required: true,
    min: 0, 
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class", 
    default: undefined,
  },
});
const Student = mongoose.model("Student", studentSchema);
export default Student;
