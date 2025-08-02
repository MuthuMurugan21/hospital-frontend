import React from "react";

function DoctorList({ doctors }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Doctor List</h2>
      <ul className="space-y-1">
        {doctors.map((doc) => (
          <li key={doc._id} className="p-2 border rounded">
            {doc.name} – {doc.specialization} – {doc.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
