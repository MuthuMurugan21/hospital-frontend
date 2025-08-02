import React from "react";

function AppointmentList({ appointments }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">All Appointments</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-1 border">Patient</th>
            <th className="p-1 border">Doctor</th>
            <th className="p-1 border">Date</th>
            <th className="p-1 border">Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a._id}>
              <td className="border p-1">{a.patientId?.name}</td>
              <td className="border p-1">{a.doctorId?.name}</td>
              <td className="border p-1">{new Date(a.date).toLocaleDateString()}</td>
              <td className="border p-1">{a.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
