import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeEdit from "./components/EmployeeEdit";

const App = () => {
  const [username, setUsername] = useState(""); // State for the logged-in username
  
  return (
    <Router>
      <AppRoutes setUsername={setUsername} username={username} />
    </Router>
  );
};

const AppRoutes = ({ setUsername, username }) => {
  const location = useLocation(); // Track the current path

  return (
    <div>
      {/* Conditionally render Navbar based on current path */}
      {location.pathname !== "/" && <Navbar username={username} />}
      
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
        v
      </Routes>
    </div>
  );
};

export default App;
