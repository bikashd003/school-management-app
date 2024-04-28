import { useFormik } from "formik";
import {
  FaUser,
  FaVenusMars,
  FaBirthdayCake,
  FaMoneyBill,
  FaAddressBook,
} from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { getClasses,getTeachers } from "../redux/dataSlice";
const Form = ({ model, initialValues, validationSchema, onSubmit }: any) => {
  const dispatch = useDispatch();
  const { classes,teachers } = useSelector((state: RootState) => state.data);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  useEffect(() => {
    dispatch(getClasses() as any);
    dispatch(getTeachers() as any);
  }, [dispatch]);
  const renderFormFields = () => {
    switch (model) {
      case "class":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-3">
                  <SiGoogleclassroom className="text-indigo-500 text-lg" />
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Class Name
                  </label>
                </div>
                <input
                  id="className"
                  name="className"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.className}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <MdOutlineDateRange className="text-indigo-500 text-lg" />
                  <label
                    htmlFor="feesPaid"
                    className="font-medium text-gray-700"
                  >
                    Year
                  </label>
                </div>
                <input
                  id="year"
                  name="year"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter total fees paid"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <GiTeacher className="text-indigo-500 text-lg" />
                  <label htmlFor="gender" className="font-medium text-gray-700">
                    Teacher
                  </label>
                </div>
                <select
                  id="teacher"
                  name="teacher"
                  onChange={formik.handleChange}
                  value={formik.values.teacher}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>
                    Select Teacher
                  </option>
                  {teachers.map((teacherObj: any) => (
                  <option key={teacherObj._id} value={teacherObj._id}>
                    {teacherObj.teacherName}
                  </option>
                ))}
                </select>
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <FaMoneyBill className="text-indigo-500 text-lg" />
                  <label htmlFor="DOB" className="font-medium text-gray-700">
                    Student Fees
                  </label>
                </div>
                <input
                  id="studentFees"
                  name="studentFees"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.studentFees}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </>
        );
      case "teacher":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-3">
                  <GiTeacher className="text-indigo-500 text-lg" />
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Teacher Name
                  </label>
                </div>
                <input
                  id="teacherName"
                  name="teacherName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.teacherName}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <FaVenusMars className="text-indigo-500 text-lg" />
                  <label htmlFor="gender" className="font-medium text-gray-700">
                    Gender
                  </label>
                </div>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <FaBirthdayCake className="text-indigo-500 text-lg" />
                  <label htmlFor="DOB" className="font-medium text-gray-700">
                    DOB (Date of Birth)
                  </label>
                </div>
                <input
                  id="DOB"
                  name="DOB"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.DOB}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <FaMoneyBill className="text-indigo-500 text-lg" />
                  <label
                    htmlFor="salary"
                    className="font-medium text-gray-700"
                  >
                    Salary
                  </label>
                </div>
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.salary}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter total fees paid"
                />
              </div>
         
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <FaAddressBook className="text-indigo-500 text-lg" />
                <label
                  htmlFor="contactDetails"
                  className="font-medium text-gray-700"
                >
                  Contact Details
                </label>
              </div>
              <textarea
                id="contactDetails"
                name="contactDetails"
                onChange={formik.handleChange}
                value={formik.values.contactDetails}
                className="w-full rounded-md border resize-none border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter contact details"
              />
            </div>
            <div>
                <div className="flex items-center space-x-3">
                  <SiGoogleclassroom className="text-indigo-500 text-lg" />
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Assign Class
                  </label>
                </div>
                <select
                  id="assignClass"
                  name="assignClass"
                  onChange={formik.handleChange}
                  value={formik.values.assignClass}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  {classes.map((classObj: any) => (
                  <option key={classObj._id} value={classObj._id}>
                    {classObj.className}
                  </option>
                ))}
                </select>
              </div>
          </>
        );
      case "student":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-3">
                  <FaUser className="text-indigo-500 text-lg" />
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Name
                  </label>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <FaVenusMars className="text-indigo-500 text-lg" />
                  <label htmlFor="gender" className="font-medium text-gray-700">
                    Gender
                  </label>
                </div>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <FaBirthdayCake className="text-indigo-500 text-lg" />
                  <label htmlFor="DOB" className="font-medium text-gray-700">
                    DOB (Date of Birth)
                  </label>
                </div>
                <input
                  id="DOB"
                  name="DOB"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.DOB}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <div className="flex items-center space-x-3">
                  <FaMoneyBill className="text-indigo-500 text-lg" />
                  <label
                    htmlFor="feesPaid"
                    className="font-medium text-gray-700"
                  >
                    Fees Paid
                  </label>
                </div>
                <input
                  id="feesPaid"
                  name="feesPaid"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.feesPaid}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter total fees paid"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <FaAddressBook className="text-indigo-500 text-lg" />
                <label
                  htmlFor="contactDetails"
                  className="font-medium text-gray-700"
                >
                  Contact Details
                </label>
              </div>
              <textarea
                id="contactDetails"
                name="contactDetails"
                onChange={formik.handleChange}
                value={formik.values.contactDetails}
                className="w-full rounded-md border resize-none border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter contact details"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <SiGoogleclassroom className="text-indigo-500 text-lg" />
                <label htmlFor="gender" className="font-medium text-gray-700">
                  Class
                </label>
              </div>
              <select
                id="classId"
                name="classId"
                onChange={formik.handleChange}
                value={formik.values.classId}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled>
                  Select class
                </option>
                {classes.map((classObj: any) => (
                  <option key={classObj._id} value={classObj._id}>
                    {classObj.className}
                  </option>
                ))}
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto max-w-md bg-white shadow-lg rounded-lg px-8 py-10">
      {renderFormFields()}
      <button
        type="submit"
        className="mt-8 w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
