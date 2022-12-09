import axios from "axios";
import { authHeader } from "../../../Helper/authHeader";

const fetchAllSupporters = async () => {
  const { data } = await axios.get(`http://localhost:3000/supporters`);
  return data;
};
const fetchSupporters = async (name = "") => {
  let url = "http://localhost:3000/supporters";
  if (name !== "") {
    url += `?name=${name}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const updateStatusPatient = async (data) => {
  await axios.post(
    `http://localhost:3000/supporters/update-status-patient`,
    data,
    authHeader()
  );
};

export { fetchAllSupporters, fetchSupporters, updateStatusPatient };
