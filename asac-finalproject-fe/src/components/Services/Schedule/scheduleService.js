import axios from "axios";

const fetchAllSchedules = async () => {
  const { data } = await axios.get(`http://localhost:3000/schedules`);
  return data;
};

const fetchScheduleById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/schedules/${id}`);
  return data;
};

const createASchedule = async (data) => {
  await axios.post(`http://localhost:3000/schedule`, data);
};

const editASchedule = async (scheduleId, data) => {
  await axios.put(`http://localhost:3000/schedules/${scheduleId}`, data);
};

const deleteASchedule = async (id) => {
  await axios.delete(`http://localhost:3000/schedules/${id}`);
};

export {
  fetchAllSchedules,
  fetchScheduleById,
  createASchedule,
  editASchedule,
  deleteASchedule,
};
