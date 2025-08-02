import React from "react";

const PrintableReport = ({ patients }) => {
  return (
    <div className="p-4 print:p-0">
      <h1 className="text-2xl font-bold mb-4 text-center">Hospital Patient Report</h1>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-1">Name</th>
            <th className="border p-1">Age</th>
            <th className="border p-1">Sex</th>
            <th className="border p-1">Contact</th>
            <th className="border p-1">Medicines</th>
            <th className="border p-1">Injections</th>
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
};

export default PrintableReport;
