import axios from "axios";
import {authHeader} from "../../../Helper/authHeader";

const fetchClinics = async (name = "") => {
  let url = "http://localhost:3000/clinics";
  if (name !== "") {
    url += `?name=${name}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const fetchAllClinics = async () => {
  const { data } = await axios.get(`http://localhost:3000/clinics`);
  return data;
};

const fetchClinicById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/clinics/${id}`);
  return data;
};

const createAClinic = async (data) => {
  await axios.post(`http://localhost:3000/clinic`, data);
};

const editAClinic = async (clinicId, data) => {
  await axios.put(`http://localhost:3000/clinics/${clinicId}`, data, authHeader());
};

const deleteAClinic = async (id) => {
  await axios.delete(`http://localhost:3000/clinics/${id}`,authHeader());
};

export {
  fetchClinics,
  fetchAllClinics,
  fetchClinicById,
  createAClinic,
  editAClinic,
  deleteAClinic,
};
