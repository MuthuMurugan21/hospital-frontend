import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";

const isAuthenticated = () => !!localStorage.getItem("token");

function App() {
  return (
    <Router>
      {isAuthenticated() && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/patients"
          element={isAuthenticated() ? <Patients /> : <Navigate to="/login" />}
        />
        <Route
          path="/doctors"
          element={isAuthenticated() ? <Doctors /> : <Navigate to="/login" />}
        />
        <Route
          path="/appointments"
          element={isAuthenticated() ? <Appointments /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
