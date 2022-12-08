import axios from "axios";

const fetchAllPatients = async () => {
  const { data } = await axios.get("http://localhost:3000/patients");
  return data.data;
};

const fetchPatientById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/patients/${id}`);
  return data;
};

const fetchPatientsSuccessByDoctorId = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/patients-by-doctor-id/${id}`
  );
  return data;
};

export { fetchAllPatients, fetchPatientById, fetchPatientsSuccessByDoctorId };
