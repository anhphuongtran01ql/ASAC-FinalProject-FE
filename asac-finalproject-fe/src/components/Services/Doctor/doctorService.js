import axios from "axios";
import { authHeader } from "../../../Helper/authHeader";

const fetchAllDoctors = async () => {
  const { data } = await axios.get(`http://localhost:3000/doctors`);
  return data;
};
const fetchDoctors = async (name = "") => {
  let url = "http://localhost:3000/doctors";
  if (name !== "") {
    url += `?name=${name}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const fetchScheduleDoctorBydate = async (id, date) => {
  let url = `http://localhost:3000/schedule-of-doctors-by-date?doctorId=${id}`;
  if (date !== "") {
    url += `&date=${date}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const fetchDoctorById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/doctors/${id}`);
  return data;
};

const createUser = async (data) => {
  await axios.post(`http://localhost:3000/user`, data, authHeader());
};

const editUser = async (doctorId, data) => {
  await axios.put(
    `http://localhost:3000/users/${doctorId}`,
    data,
    authHeader()
  );
};

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`, authHeader());
};

const createPatientFeedback = async (data) => {
  await axios.post(`http://localhost:3000/comment`, data, authHeader());
};

const getPatientFeedback = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/appointments/${id}/comment`,
    authHeader()
  );
  return data;
};

const editComment = async (commentId, data) => {
  await axios.put(
    `http://localhost:3000/appointments/comments/${commentId}`,
    data,
    authHeader()
  );
};

const fetchCommentById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/comments/${id}`, authHeader());
  return data;
};

export {
  fetchAllDoctors,
  fetchDoctors,
  fetchScheduleDoctorBydate,
  fetchDoctorById,
  createUser,
  editUser,
  deleteUser,
  createPatientFeedback,
  getPatientFeedback,
  editComment,
  fetchCommentById,
};
