import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../components/DashboardCard";
import { FaUserMd, FaUserNurse, FaUsers, FaCapsules, FaCalendarCheck } from "react-icons/fa";

function Dashboard() {
  const [counts, setCounts] = useState({
    doctors: 0,
    nurses: 0,
    patients: 0,
    medicines: 0,
    appointments: 0
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const [doc, nurse, patient, med, appt] = await Promise.all([
        axios.get("http://localhost:5000/api/doctors"),
        axios.get("http://localhost:5000/api/nurses"),
        axios.get("http://localhost:5000/api/patients"),
        axios.get("http://localhost:5000/api/medicines"),
        axios.get("http://localhost:5000/api/appointments")
      ]);

      setCounts({
        doctors: doc.data.length,
        nurses: nurse.data.length,
        patients: patient.data.length,
        medicines: med.data.length,
        appointments: appt.data.length
      });
    };

    fetchCounts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <DashboardCard title="Doctors" count={counts.doctors} icon={<FaUserMd />} color="bg-blue-600" />
      <DashboardCard title="Nurses" count={counts.nurses} icon={<FaUserNurse />} color="bg-teal-600" />
      <DashboardCard title="Patients" count={counts.patients} icon={<FaUsers />} color="bg-purple-600" />
      <DashboardCard title="Medicines" count={counts.medicines} icon={<FaCapsules />} color="bg-orange-500" />
      <DashboardCard title="Appointments" count={counts.appointments} icon={<FaCalendarCheck />} color="bg-green-600" />
    </div>
  );
}

export default Dashboard;
