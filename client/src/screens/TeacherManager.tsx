import Form from "../components/Form";
import { classSchema } from "../Schemas/StudentSchema";
import { createTeacher, deleteTeacher, getTeachers, setEdit, setId, updateTeacher } from "../redux/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Table from "../components/Table";
import moment from "moment";
interface teacherForm{
  teacherName: string,
  gender: string,
  DOB: string,
  salary: number,
  contactDetails: string,
  assignClass: string,
}
const TeacherManager = () => {
  const dispatch = useDispatch();
  const { teachers, edit,id } = useSelector((state: RootState) => state.data);
  const [preFormValue, setPreFormValue] = useState<teacherForm | null>(null);

  const defaultValues: teacherForm = {
    teacherName: "",
    gender: "",
    DOB: "",
    salary: 0,
    contactDetails: "",
    assignClass: "",
  };

  const handleSubmit = (values: any) => {
    if(!edit){
      createTeacher(values);
    }
    else if(edit){
      updateTeacher(values,id);
      dispatch(setEdit(false));
      dispatch(setId(""));
    }
  };
  const handleEdit = (teacherId: string) => {
    const teacher = teachers.find((t) => t._id === teacherId);
    if (teacher) {
      dispatch(setEdit(true));
      dispatch(setId(teacherId));
      setPreFormValue({
        teacherName: teacher.teacherName,
        gender: teacher.gender,
        DOB: moment(teacher.DOB).format("YYYY-MM-DD"),
        salary:teacher.salary,
        contactDetails: teacher.contactDetails,
        assignClass: teacher.assignedClass.className,
      });
    }
  };
  const handleDelete = (teacherId: string) => {
    dispatch(deleteTeacher(teacherId) as any);
  };
  useEffect(() => {
    dispatch(getTeachers() as any);
  }, [dispatch]);
  const tableHead = [
    "Teacher Name",
    "Gender",
    "DOB",
    "Salary",
    "Contact Details",
    "Assigned Class",
    "Actions",
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Teacher Manager</h2>

      <Form
        model="teacher"
        initialValues={edit ? preFormValue : defaultValues}
        onSubmit={handleSubmit}
        validationSchema={classSchema}
      />
      <div className="mt-8">
        {teachers.length > 0 && (
          <Table
            tableHead={tableHead}
            teacherRow={teachers}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default TeacherManager;
