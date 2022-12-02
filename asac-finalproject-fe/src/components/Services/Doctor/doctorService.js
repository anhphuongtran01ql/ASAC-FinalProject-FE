import axios from "axios";

const fetchAllDoctors = async () => {
  const { data } = await axios.get(`http://localhost:3000/doctors`);
  return data;
};
const fetchDoctors = async (name) => {
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
  await axios.post(`http://localhost:3000/user`, data);
};

const editUser = async (doctorId, data) => {
  console.log("doctorId", doctorId);
  console.log("data", data);
  
  await axios.put(`http://localhost:3000/users/${doctorId}`, data);
};

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`);
};

export {
  fetchAllDoctors,
  fetchDoctors,
  fetchScheduleDoctorBydate,
  fetchDoctorById,
  createUser,
  editUser,
  deleteUser,
};
