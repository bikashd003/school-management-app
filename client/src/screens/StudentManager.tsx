import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudents,
  createStudent,
  deleteStudent,
  setEdit,
} from "../redux/dataSlice";
import { studentSchema } from "../Schemas/StudentSchema";
import Form from "../components/Form";
import type { RootState } from "../redux/store";
import Table from "../components/Table";
import moment from "moment";
interface studentForm {
  name: string;
  gender: string;
  DOB: string;
  contactDetails: string;
  feesPaid: string;
  class: string;
}

const StudentManager: React.FC = () => {
  const dispatch = useDispatch();
  const { students, edit } = useSelector((state: RootState) => state.data);
  const [preFormValue, setPreFormValue] = useState<studentForm | null>(null);

  const defaultValues: studentForm = {
    name: "",
    gender: "",
    DOB: "",
    contactDetails: "",
    feesPaid: "",
    class: "",
  };

  const handleSubmit = (values: any) => {
    createStudent(values);
  };

  const handleEdit = (studentId: string) => {
    const student = students.find((s) => s._id === studentId);
    if (student) {
      dispatch(setEdit(true));
      setPreFormValue({
        name: student.name,
        gender: student.gender,
        DOB: moment(student.DOB).format("YYYY-MM-DD"),
        contactDetails: student.contactDetails,
        feesPaid: student.feesPaid,
        class: student.class,
      });
    }
  };

  const handleDelete = (studentId: string) => {
    dispatch(deleteStudent(studentId) as any);
  };

  useEffect(() => {
    dispatch(getStudents() as any);
  }, [dispatch]);
  const tableHead = [
    "Name",
    "Gender",
    "DOB",
    "Contact Details",
    "Fees Paid",
    "Class",
    "Actions",
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Student Manager</h2>

      <Form
        model="student"
        initialValues={edit ? preFormValue : defaultValues}
        onSubmit={handleSubmit}
        validationSchema={studentSchema}
      />

      <div className="mt-8">
        {students.length > 0 && (
          <Table
            tableHead={tableHead}
            tableRow={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default StudentManager;
