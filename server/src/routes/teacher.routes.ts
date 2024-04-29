import {Router} from 'express'
const teacherRouter=Router()
import {getTeacher,createTeacher,updateTeacher,deleteTeacher,getExpenses} from '../controllers/teacher.controller.ts'
teacherRouter.route("/create-teacher").post(createTeacher)
teacherRouter.route("/get-teachers").get(getTeacher)
teacherRouter.route("/update-teacher/:id").put(updateTeacher)
teacherRouter.route("/delete-teacher/:id").delete(deleteTeacher)
teacherRouter.route("/get-expenses").get(getExpenses)
export default teacherRouter