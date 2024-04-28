import Form from "../components/Form";
import { classSchema } from "../Schemas/StudentSchema";
import { createClass, deleteClass, getClasses, setEdit, setId, updateClass } from "../redux/dataSlice";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
interface classForm {
  className: string;
  year: string;
  teacher: string;
  studentFees: number;
}
const ClassManager = () => {
  const dispatch = useDispatch();
  const { classes, edit, id } = useSelector((state: RootState) => state.data);
  const [preFormValue, setPreFormValue] = useState<classForm | null>(null);
  const defaultValues: classForm = {
    className: "",
    year: "",
    teacher: "",
    studentFees: 0,
  };

  const handleSubmit = (values: any) => {
    if(!edit){
      createClass(values);
    }
    else if(edit){
      updateClass(values,id)
    }
  };
  const handleEdit = (classId: string) => {
    const classData = classes.find((c) => c._id === classId);

    if (classData) {
      dispatch(setEdit(true));
      dispatch(setId(classId));
      setPreFormValue({
        className: classData.className,
        year: classData.year,
        teacher: classData.teacherId,
        studentFees: classData.studentFees,
      });
    }
  };
  const handleDelete = (classId:string) => {
    dispatch(deleteClass(classId) as any);
  };
  const tableHead = [
    "Class Name",
    "Yaer",
    "Teacher",
    "Student Fees",
    "Student List",
    "Actions",
  ];
  useEffect(() => {
    dispatch(getClasses() as any);
  }, [handleSubmit,handleDelete]);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Class Manager</h2>

      <Form
        model="class"
        initialValues={edit ? preFormValue : defaultValues}
        onSubmit={handleSubmit}
        validationSchema={classSchema}
      />
      <div className="mt-8">
        {classes.length > 0 && (
          <Table
            tableHead={tableHead}
            classRow={classes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ClassManager;
