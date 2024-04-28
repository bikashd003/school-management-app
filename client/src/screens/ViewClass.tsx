import { useEffect, useState } from "react";
import { getClasses } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PieChart from "../components/PieChart";
const ViewClass = () => {
  const dispatch = useDispatch();
const [classId,setClassId]=useState("")
  const { classes } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(getClasses() as any)
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
             Class Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Year
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Student Fees
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Student List
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
             Teacher Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
             PieChart
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {classes.map((item:any) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {item.className}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.year}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.studentFees}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.studentListId.map((name:any)=>{return (name.name)})}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.teacherId.teacherName?item.teacherId.teacherName:''}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500"><button onClick={()=>setClassId(item._id)}>View</button></div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
<div> {classId && <PieChart id={classId}/>}</div>
    </div>
  );
};

export default ViewClass;