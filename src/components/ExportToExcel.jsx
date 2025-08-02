import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportToExcel({ data, filename = "patients" }) {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(p => ({
      Name: p.name,
      Age: p.age,
      Sex: p.sex,
      Contact: p.contact,
      Medicines: p.medicines.join(", "),
      Injections: p.injections.join(", ")
    })));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, `${filename}.xlsx`);
  };

  return (
    <button onClick={handleExport} className="bg-yellow-500 text-white px-4 py-2 rounded">
      Export to Excel
    </button>
  );
}

export default ExportToExcel;
