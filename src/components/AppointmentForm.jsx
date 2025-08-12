import React, { useState } from "react";

const AppointmentForm = ({ onAppointmentAdded }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.patientName && formData.doctorName && formData.appointmentDate && formData.reason) {
      onAppointmentAdded(formData);
      setFormData({
        patientName: "",
        doctorName: "",
        appointmentDate: "",
        reason: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Book an Appointment
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Patient Name</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Enter patient name"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Doctor Name</label>
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Enter doctor's name"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Appointment Date</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Reason</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Reason for appointment"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          rows="3"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
