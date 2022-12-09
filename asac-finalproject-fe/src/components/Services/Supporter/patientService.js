import axios from "axios";
import { authHeader } from "../../../Helper/authHeader";

const fetchAllPatients = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/patients",
    authHeader()
  );
  return data.data;
};

const fetchPatientById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/patients/${id}`,
    authHeader()
  );
  return data;
};

const fetchPatientsSuccessByDoctorId = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/patients-by-doctor-id/${id}`,
    authHeader()
  );
  return data;
};

export { fetchAllPatients, fetchPatientById, fetchPatientsSuccessByDoctorId };
