import React from "react";

function DashboardCard({ title, count, icon, color }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg shadow-md ${color} text-white`}>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-2xl">{count}</p>
      </div>
      <div className="text-4xl">{icon}</div>
    </div>
  );
}

export default DashboardCard;
