
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPatientPDF = (patients) => {
  const doc = new jsPDF();
  doc.text("Patient Report", 20, 15);

  const tableColumn = ["Name", "Age", "Sex", "Contact", "Medicine", "Injection"];
  const tableRows = [];

  patients.forEach((p) => {
    tableRows.push([
      p.name,
      p.age,
      p.sex,
      p.contact,
      p.medicine?.join(", "),
      p.injection?.join(", "),
    ]);
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });

  doc.save("patient_report.pdf");
};
