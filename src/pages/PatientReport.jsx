import React, { useEffect, useState } from "react";
import axios from "axios";
import PrintableReport from "../components/PrintableReport";

const PatientReport = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/patients");
      setPatients(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Printable Report</h2>
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Print PDF
        </button>
      </div>
      <PrintableReport patients={patients} />
    </div>
  );
};

export default PatientReport;
