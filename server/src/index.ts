import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.ts";
import teacherRouter from "./routes/teacher.routes.ts"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3003, () => {
      console.log(`Server is running in ${process.env.PORT || 3003}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });
app.use(teacherRouter)