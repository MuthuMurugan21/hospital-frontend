import React from "react";

function PatientList({ patients }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Patient Records</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Sex</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Medicines</th>
            <th className="p-2 border">Injections</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p._id}>
              <td className="border p-1">{p.name}</td>
              <td className="border p-1">{p.age}</td>
              <td className="border p-1">{p.sex}</td>
              <td className="border p-1">{p.contact}</td>
              <td className="border p-1">{p.medicines.join(", ")}</td>
              <td className="border p-1">{p.injections.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
