import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

const createAppointment = (appointment) => {
  return axios.post(API_URL, appointment);
};

const getAllAppointments = () => {
  return axios.get(API_URL);
};

export default {
  createAppointment,
  getAllAppointments,
};
