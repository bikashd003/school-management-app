import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { API } from "../Helpers/Api";
import axios from "axios";
interface Student {
  _id: string;
  name: string;
  gender: string;
  DOB: string;
  contactDetails: string;
  feesPaid: string;
  class: string;
}
interface DataState {
  classes: any[]; 
  teachers: any[]; 
  students: Student[];
  edit: boolean;
}

const initialState:DataState = {
  classes: [],
  teachers: [],
  students: [],
  edit:false,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setClasses: (state, action) => {
      state.classes = action.payload;
    },
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setEdit:(state,action)=>{
      state.edit=action.payload
    }
  },
});
export const { setClasses, setTeachers, setStudents,setEdit } = dataSlice.actions;

export const getClasses=()=> async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`${API}/get-classes`);
    dispatch(setClasses(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const getTeachers = async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`${API}/get-teachers`);
    dispatch(setTeachers(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const getStudents=() => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`${API}/get-students`);
    dispatch(setStudents(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const createStudent=async(data:any)=>{
  try {
    console.log(data)
    await axios.post(`${API}/create-student`,data);
  } catch (error) {
    console.log(error);
  }
}
export const updateStudent=async(data:any)=>{
  try {
    const res = await axios.put(`${API}/update-student`, data);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const deleteStudent=async(id:any)=>{
  try {
    const res = await axios.delete(`${API}/delete-student/${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const createTeacher=async(data:any)=>{
  try {
    const res = await axios.post(`${API}/create-teacher`, data);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const updateTeacher=async(data:any)=>{
  try {
    const res = await axios.put(`${API}/update-teacher`, data);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const deleteTeacher=async(id:any)=>{
  try {
    const res = await axios.delete(`${API}/delete-teacher/${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const createClass=async(data:any)=>{
  try {
    const res = await axios.post(`${API}/create-class`, data);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const updateClass=async(data:any)=>{
  try {
    const res = await axios.put(`${API}/update-class`, data);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const deleteClass=async(id:any)=>{
  try {
    const res = await axios.delete(`${API}/delete-class/${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}

export default dataSlice.reducer;
