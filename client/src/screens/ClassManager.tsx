import Form from "../components/Form"
import {classSchema} from "../Schemas/StudentSchema"
const ClassManager = () => {
  const initialValues = {
    name: '',
    year: '',
    teacher:'',
    studentFees:'',
  };

  const handleSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Class Manager</h2>
      <Form model="class" initialValues={initialValues} onSubmit={handleSubmit} validationSchema={classSchema}/>
     
    </div>
  );
};

export default ClassManager;