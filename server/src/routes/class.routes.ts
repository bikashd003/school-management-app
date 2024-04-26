import {Router} from "express"
const classRouter=Router()
import {createClass,getClasses,updateClass,deleteClass} from "../controllers/class.controller.ts"
classRouter.route("/create-class").post(createClass)
classRouter.route("/get-classes").get(getClasses)
classRouter.route("/update-class/:id").put(updateClass)
classRouter.route("/delete-class/:id").delete(deleteClass)

export default classRouter