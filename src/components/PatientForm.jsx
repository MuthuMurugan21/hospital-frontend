import React, { useState } from "react";
import axios from "axios";

function PatientForm({ onAdd }) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    sex: "",
    contact: "",
    address: "",
    medicines: "",
    injections: ""
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...patient,
      medicines: patient.medicines.split(","),
      injections: patient.injections.split(",")
    };
    const res = await axios.post("http://localhost:5000/api/patients", data);
    onAdd(res.data);
    setPatient({
      name: "",
      age: "",
      sex: "",
      contact: "",
      address: "",
      medicines: "",
      injections: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <input className="w-full p-2 border" name="name" value={patient.name} onChange={handleChange} placeholder="Name" required />
      <input className="w-full p-2 border" name="age" value={patient.age} onChange={handleChange} placeholder="Age" required />
      <input className="w-full p-2 border" name="sex" value={patient.sex} onChange={handleChange} placeholder="Sex (M/F)" required />
      <input className="w-full p-2 border" name="contact" value={patient.contact} onChange={handleChange} placeholder="Contact Number" required />
      <input className="w-full p-2 border" name="address" value={patient.address} onChange={handleChange} placeholder="Address" required />
      <input className="w-full p-2 border" name="medicines" value={patient.medicines} onChange={handleChange} placeholder="Medicines (comma separated)" />
      <input className="w-full p-2 border" name="injections" value={patient.injections} onChange={handleChange} placeholder="Injections (comma separated)" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Patient</button>
    </form>
  );
}

export default PatientForm;
