import axios from "axios";

const fetchSpecializations = async (name) => {
  let url = "http://localhost:3000/specializations";
  if (name !== "") {
    url += `?name=${name}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const fetchDoctorsBySpecialization = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/doctors/specializaton/${id}`
  );
  return data;
};

const fetchAllSpecializations = async () => {
  const { data } = await axios.get(`http://localhost:3000/specializations`);
  return data;
};

const fetchSpecializationById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/specializations/${id}`
  );
  return data;
};

const createASpecialization = async (data) => {
  await axios.post(`http://localhost:3000/specialization`, data);
};

const editASpecialization = async (specializationId, data) => {
  await axios.put(
    `http://localhost:3000/specialization/${specializationId}`,
    data
  );
};

const deleteASpecialization = async (id) => {
  await axios.delete(`http://localhost:3000/specializations/${id}`);
};

export {
  fetchSpecializations,
  fetchDoctorsBySpecialization,
  fetchAllSpecializations,
  fetchSpecializationById,
  createASpecialization,
  editASpecialization,
  deleteASpecialization,
};
