import axios from "axios";
import { authHeader } from "../../../Helper/authHeader";

const fetchPosts = async () => {
  const { data } = await axios.get("http://localhost:3000/patients");
  return data;
};

const createSchedule = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/patient",
    data,
    authHeader()
  );
  return response?.data;
};
async function createPost() {
  await axios.post("https://jsonplaceholder.typicode.com/posts", authHeader());
}

export { fetchPosts, createPost, createSchedule };
