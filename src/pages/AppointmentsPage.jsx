// src/pages/AppointmentsPage.jsx
import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import axios from "axios";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/appointments")
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  // Add new appointment to the list
  const onAppointmentAdded = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
          🏥 Hospital Appointments
        </h1>

        {/* Form Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Book a New Appointment
          </h2>
          <AppointmentForm onAppointmentAdded={onAppointmentAdded} />
        </div>

        {/* Appointment List */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            All Appointments
          </h2>
          <AppointmentList appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
