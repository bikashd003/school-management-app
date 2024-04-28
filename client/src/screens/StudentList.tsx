import { useEffect } from "react";
import { getClassById } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import moment from "moment";

const StudentList = () => {
  const dispatch = useDispatch();
  const { classes } = useSelector((state: RootState) => state.data);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getClassById(id) as any);
  }, [dispatch]);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Student List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Gender</th>
            <th className="px-6 py-3 text-left">DOB</th>
            <th className="px-6 py-3 text-left">Contact Details</th>
            <th className="px-6 py-3 text-left">Fees Paid</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classes, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-6 py-4">{classes.name}</td>
              <td className="px-6 py-4">{classes.gender}</td>
              <td className="px-6 py-4">{moment(classes.DOB).format("DD-MM-YYYY")}</td>
              <td className="px-6 py-4">{classes.contactDetails}</td>
              <td className="px-6 py-4">{classes.feesPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
