import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorForm from "../components/DoctorForm";
import DoctorList from "../components/DoctorList";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    const res = await axios.get("http://localhost:5000/api/doctors");
    setDoctors(res.data);
  };

  const addDoctor = (newDoctor) => {
    setDoctors([...doctors, newDoctor]);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-4">
      <DoctorForm onAdd={addDoctor} />
      <DoctorList doctors={doctors} />
    </div>
  );
}

export default Doctors;
