import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Table = ({ tableHead, studentRow,handleEdit,handleDelete,classRow,teacherRow }:any) => {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {tableHead &&
                tableHead.map((thead:string) => {
                  return ( 
                    <th scope="col" className="px-6 py-3" key={thead}>
                      {thead}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {studentRow &&
              studentRow.map((row:any, index:number) => {
                return ( 
                  <tr
                    className="bg-white border-b "
                    key={index}
                  >
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4">{row.gender}</td>
                    <td className="px-6 py-4">{moment(row.DOB).format("DD-MM-YYYY")}</td>
                    <td className="px-6 py-4">{row.contactDetails}</td>
                    <td className="px-6 py-4">{row.feesPaid}</td>
                    <td className="px-6 py-4">{row.classId.className}</td>
                    <td className="px-6 py-4 flex justify-end"> 
                      <CiEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleEdit(row._id)} />
                      <MdDelete className="text-xl text-red-500 cursor-pointer hover:text-red-700 ml-3" onClick={() => handleDelete(row._id)} />
                    </td>
                  </tr>
                );
              })}
            {classRow &&
              classRow.map((row:any, index:number) => {
                return ( 
                  <tr
                    className="bg-white border-b "
                    key={index}
                  >
                    <td className="px-6 py-4">{row.className}</td>
                    <td className="px-6 py-4">{row.year}</td>
                    <td className="px-6 py-4">{row.teacherId? row.teacherId.teacherName:""}</td>
                    <td className="px-6 py-4">{row.studentFees}</td>
                    <td className="px-6 py-4 flex justify-start"> 
                      <CiEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleEdit(row._id)} />
                      <MdDelete className="text-xl text-red-500 cursor-pointer hover:text-red-700 ml-3" onClick={() => handleDelete(row._id)} />
                    </td>
                  </tr>
                );
              })}
            {teacherRow &&
              teacherRow.map((row:any, index:number) => {
                return ( 
                  <tr
                    className="bg-white border-b "
                    key={index}
                  >
                    <td className="px-6 py-4">{row.teacherName}</td>
                    <td className="px-6 py-4">{row.gender}</td>
                    <td className="px-6 py-4">{moment(row.DOB).format("DD-MM-YYYY")}</td>
                    <td className="px-6 py-4">{row.salary}</td>
                    <td className="px-6 py-4">{row.contactDetails}</td>
                    <td className="px-6 py-4">{row.assignedClass.className}</td>
                    <td className="px-6 py-4 flex justify-start"> 
                      <CiEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleEdit(row._id)} />
                      <MdDelete className="text-xl text-red-500 cursor-pointer hover:text-red-700 ml-3" onClick={() => handleDelete(row._id)} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  