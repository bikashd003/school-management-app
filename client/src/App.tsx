import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClassManager from "./screens/ClassManager";
import StudentManager from "./screens/StudentManager";
import TeacherManager from "./screens/TeacherManager";
import StudentList from "./screens/StudentList";
import ClassManagement from "./screens/ClassManagement";
import StudentManagement from "./screens/StudentManagement";
import ViewStudents from "./screens/ViewStudents";
import ViewClass from "./screens/ViewClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <StudentManagement/>
      </div>
    ),
  },
  {
    path: "/create-student",
    element: (
      <div>
        <Navbar />
        <StudentManager />
      </div>
    ),
  },
  {
    path: "/view-students",
    element: (
      <div>
        <Navbar />
        <ViewStudents />
      </div>
    ),
  },
  {
    path: "/class",
    element: (
      <div>
        <Navbar />
        <ClassManagement />
      </div>
    ),
  },
  {
    path: "/create-class",
    element: (
      <div>
        <Navbar />
        <ClassManager />
      </div>
    ),
  },
  {
    path: "/view-classes",
    element: (
      <div>
        <Navbar />
        <ViewClass />
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
  {
    path: "/student-list/:id",
    element: (
      <div>
        <Navbar />
        <StudentList />
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
