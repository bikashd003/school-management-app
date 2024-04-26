import {Router} from 'express'
const teacherRouter=Router()
import {getTeacher,createTeacher,updateTeacher,deleteTeacher} from '../controllers/teacher.controller.ts'
teacherRouter.route("/create-teacher").post(createTeacher)
teacherRouter.route("/get-teacher").get(getTeacher)
teacherRouter.route("/update-teacher").put(updateTeacher)
teacherRouter.route("/delete-teacher").delete(deleteTeacher)
export default teacherRouter