import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">Dashboard</Link>
        <Link to="/patients" className="mr-4">Patients</Link>
        <Link to="/doctors" className="mr-4">Doctors</Link>
        <Link to="/appointments" className="mr-4">Appointments</Link>
      </div>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
}

export default Navbar;
