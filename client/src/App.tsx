import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClassManager from "./screens/ClassManager";
import StudentManager from "./screens/StudentManager";
import TeacherManager from "./screens/TeacherManager";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <StudentManager />
      </div>
    ),
  },
  {
    path: "/class",
    element: (
      <div>
        <Navbar />
        <ClassManager />
      </div>
    ),
  },
  {
    path: "/teacher",
    element: (
      <div>
        <Navbar />
        <TeacherManager />
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
