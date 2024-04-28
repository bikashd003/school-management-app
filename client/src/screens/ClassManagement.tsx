import { useNavigate } from "react-router-dom";
const ClassManagement = () => {
    const navigate = useNavigate();
    const handleCreateClass = () => {
        navigate("/create-class");
    }
    const handleViewClasses = () => {
        navigate("/view-classes");
    }
  return (
    <>
     <div className="flex w-full justify-center gap-12 items-center flex-wrap h-[80vh]">
     <div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center cursor-pointer"  onClick={handleCreateClass}>
        <h1 className="text-green-500 text-2xl" >Create Class</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center cursor-pointer" onClick={handleViewClasses}>
        <h1 className="text-blue-500 text-2xl">View Classes</h1>
      </div>
     </div>
    </>
  );
};

export default ClassManagement;
