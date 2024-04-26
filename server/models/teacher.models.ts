import mongoose,{Schema} from "mongoose"
const teacherSchema = new Schema({
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
    salary: {
      type: Number,
      required: true,
      min: 0, 
    },
    assignedClass: {
      type: Schema.Types.ObjectId,
      ref: "Class", 
    },
  });
  
  const teacher=mongoose.model("Teacher",teacherSchema)
  export default teacher