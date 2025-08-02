import React, { useState, useEffect } from "react";
import axios from "axios";

function AppointmentForm({ onAdd }) {
  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    date: "",
    reason: ""
  });

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((res) => setPatients(res.data));
    axios.get("http://localhost:5000/api/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/appointments", form);
    onAdd(res.data);
    setForm({ patientId: "", doctorId: "", date: "", reason: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <select name="patientId" value={form.patientId} onChange={handleChange} className="w-full p-2 border" required>
        <option value="">Select Patient</option>
        {patients.map((p) => (
          <option key={p._id} value={p._id}>
            {p.name}
          </option>
        ))}
      </select>

      <select name="doctorId" value={form.doctorId} onChange={handleChange} className="w-full p-2 border" required>
        <option value="">Select Doctor</option>
        {doctors.map((d) => (
          <option key={d._id} value={d._id}>
            {d.name} ({d.specialization})
          </option>
        ))}
      </select>

      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border" required />
      <textarea name="reason" value={form.reason} onChange={handleChange} className="w-full p-2 border" placeholder="Reason for visit" />

      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;
