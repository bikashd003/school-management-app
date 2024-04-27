import { useState, useEffect } from "react";
import logo from "../assets/icon.png";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeItem, setActiveItem] = useState("student");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-roboto flex justify-between items-center bg-[#28C2A0] mx-auto py-0.5 px-8">
      <Link to="/" className="w-full text-3xl font-bold flex items-center">
        <img src={logo} alt="" className="h-8" />
        <span className="text-white text-2xl">ABC Institute</span>
      </Link>
      <ul className="hidden md:flex">
        <Link
          to="/"
          onClick={() => setActiveItem("student")}
          className={`p-4 font-semibold hover:text-white ${activeItem === "student" ? "text-white" : "text-gray-500"}`}
        >
          Student
        </Link>
        <Link
          to="/class"
          onClick={() => setActiveItem("class")}
          className={`p-4 font-semibold hover:text-white ${activeItem === "class" ? "text-white" : "text-gray-500"}`}
        >
          Class
        </Link>
        <Link
          to="/teacher"
          onClick={() => setActiveItem("teacher")}
          className={`p-4 font-semibold hover:text-white ${activeItem === "teacher" ? "text-white" : "text-gray-500"}`}
        >
          Teacher
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden text-white">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-1/2 transform -translate-x-1/2 text-center top-0 w-[40%] h-full border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed h-full w-[40%] text-center top-[-100%] left-1/2 transform -translate-x-1/2"
        }
      >
        <Link to="/"
          className="p-4 border-b border-gray-600 text-white "
          onClick={() => setActiveItem("student")}
        >
          Student
        </Link>
        <Link to="/class"
          className="p-4 border-b border-gray-600 text-white"
          onClick={() => setActiveItem("student")}
        >
          Class
        </Link>
        <Link to="/teacher"
          className="p-4 border-b border-gray-600 text-white"
          onClick={() => setActiveItem("student")}
        >
          Teacher
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
