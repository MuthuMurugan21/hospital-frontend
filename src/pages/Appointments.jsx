import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  const addAppointment = (newAppt) => {
    setAppointments([...appointments, newAppt]);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-4">
      <AppointmentForm onAdd={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default Appointments;
