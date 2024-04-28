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
  classId: string;
}
interface Piechart{
    _id: any;
  gender: string;
  count: number;
}
interface DataState {
  classes: any[]; 
  teachers: any[]; 
  students: Student[];
  edit: boolean;
  id: string;
  totalPages:number,
  pieChartData: Piechart[];
}

const initialState:DataState = {
  classes: [],
  teachers: [],
  students: [],
  edit:false,
  id :"",
  totalPages:0,
  pieChartData: [],
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
    },
    setId:(state, action)=>{
      state.id=action.payload
    },
    setTotalPages:(state, action)=>{
      state.totalPages=action.payload
    },
    setPieChartData: (state, action) => {
      state.pieChartData = action.payload;
    }

  },
});
export const { setClasses, setTeachers, setStudents,setEdit,setId,setTotalPages,setPieChartData } = dataSlice.actions;

export const getClasses=()=> async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`${API}/get-classes`);
    dispatch(setClasses(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const getTeachers =()=> async (dispatch: AppDispatch) => {
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
export const getStudentsByPage=(page:number,limit:number) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`${API}/get-students-by-page?page=${page}&limit=${limit}`);
    dispatch(setStudents(res.data.students));
    dispatch(setTotalPages(res.data.totalPages))
  } catch (error) {
    console.log(error);
  }
};
export const createStudent=async(data:any)=>{
  try {
    await axios.post(`${API}/create-student`,data);
  } catch (error) {
    console.log(error);
  }
}
export const updateStudent=async(data:any,id:string)=>{
  try {
    const res = await axios.put(`${API}/update-student/${id}`, data);
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
export const updateTeacher=async(data:any,id:string)=>{
  try {
    const res = await axios.put(`${API}/update-teacher/${id}`, data);
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
export const updateClass=async(data:any,id:string)=>{
  try {
    const res = await axios.put(`${API}/update-class/${id}`, data);
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
export const getClassById=(id:any)=>async(dispatch:AppDispatch)=>{
  try {
    const res = await axios.get(`${API}/get-class/${id}`);
    dispatch(setClasses(res.data.studentListId));
  } catch (error) {
    console.log(error);
  }
}
export const getPieChart=(id:string)=>async(dispatch:AppDispatch)=>{
  try {
    const res = await axios.get(`${API}/get-piechart/${id}`);
    dispatch(setPieChartData(res.data));
  } catch (error) {
    console.log(error);
  }
}

export default dataSlice.reducer;
