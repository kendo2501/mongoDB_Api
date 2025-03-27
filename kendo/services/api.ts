import axios from 'axios';
import { Student } from '../types/Student';

const API_URL = 'http://192.168.10.3:2501/api/kendo/';

export const fetchStudents = async (): Promise<Student[]> => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const addStudent = async (student_id: string, name: string) => {
  return await axios.post(`${API_URL}/add`, { student_id, name });
};

export const updateStudent = async (student_id: string, name: string) => {
  return await axios.put(`${API_URL}/update`, { student_id, name });
};


export const deleteStudent = async (student_id: string) => {
  return await axios.delete(`${API_URL}/delete`, { data: { student_id } });
};
