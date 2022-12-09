import axios from "axios";
import { authHeader } from "../../../Helper/authHeader";

const fetchAllSchedules = async () => {
  const { data } = await axios.get(
    `http://localhost:3000/schedules`,
    authHeader()
  );
  return data;
};

const fetchScheduleById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/schedules/${id}`,
    authHeader()
  );
  return data;
};

const createASchedule = async (data) => {
  await axios.post(`http://localhost:3000/schedule`, data, authHeader());
};

const editASchedule = async (scheduleId, data) => {
  await axios.put(
    `http://localhost:3000/schedules/${scheduleId}`,
    data,
    authHeader()
  );
};

const deleteASchedule = async (id) => {
  await axios.delete(`http://localhost:3000/schedules/${id}`, authHeader());
};

export {
  fetchAllSchedules,
  fetchScheduleById,
  createASchedule,
  editASchedule,
  deleteASchedule,
};
