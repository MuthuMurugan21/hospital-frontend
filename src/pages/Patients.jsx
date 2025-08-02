import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientForm from "../components/PatientForm";
import PatientList from "../components/PatientList";
import ExportToExcel from "../components/ExportToExcel";
import { exportPatientPDF } from "../components/PdfExport";


function Patients() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const res = await axios.get("http://localhost:5000/api/patients");
    setPatients(res.data);
  };

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-4">
      <PatientForm onAdd={addPatient} />
      <PatientList patients={patients} />
      <ExportToExcel data={patients} />
      <button onClick={() => exportPatientPDF(patients)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">
        📄 Download Report PDF
      </button>
    </div>
  );
}

export default Patients;
