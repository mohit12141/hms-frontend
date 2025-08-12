// src/components/AppointmentList.jsx
import React from "react";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Upcoming Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500 italic">No appointments scheduled yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {appt.patientName}
              </h3>
              <p className="text-gray-700 mt-1">
                Doctor: <span className="font-medium">{appt.doctorName}</span>
              </p>
              <p className="text-gray-700 mt-1">
                Date:{" "}
                <span className="font-medium">
                  {new Date(appt.date).toLocaleDateString()}
                </span>
              </p>
              <p className="text-gray-700 mt-1">
                Time: <span className="font-medium">{appt.time}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
