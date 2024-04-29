import { useEffect, useState } from "react";
import { getClasses } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PieChart from "../components/PieChart";
const ViewClass = () => {
  const dispatch = useDispatch();
  const [classId, setClassId] = useState("");
  const { classes } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(getClasses() as any);
  }, [dispatch]);
  return (
    <div className="container mx-auto flex flex-wrap justify-between p-6">
      <div className="w-full lg:w-3/5 bg-white shadow-md rounded-lg overflow-hidden h-min">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Class Name", "Year", "Student Fees", "Student List", "Teacher Name", "PieChart"].map(
                (header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.className}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.studentFees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {item.studentListId.map((name: any) => {
                    return name.name;
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.teacherId.teacherName || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                    onClick={() => setClassId(item._id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full lg:w-2/5 p-6">
        {classId ? (
          <div className="bg-white shadow-md rounded-lg h-full flex justify-center items-center">
            <PieChart id={classId} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a class to view the chart
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewClass;
