import React, { useState } from "react";
import axios from "axios";

function DoctorForm({ onAdd }) {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    contact: "",
    email: ""
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/doctors", doctor);
    onAdd(res.data);
    setDoctor({ name: "", specialization: "", contact: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded-lg shadow-md">
      <input className="w-full p-2 border" name="name" value={doctor.name} onChange={handleChange} placeholder="Doctor Name" required />
      <input className="w-full p-2 border" name="specialization" value={doctor.specialization} onChange={handleChange} placeholder="Specialization" required />
      <input className="w-full p-2 border" name="contact" value={doctor.contact} onChange={handleChange} placeholder="Contact" required />
      <input className="w-full p-2 border" name="email" value={doctor.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Doctor</button>
    </form>
  );
}

export default DoctorForm;
