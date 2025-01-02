import React from "react";
import AdminModule from "./components/AdminModule";
import UserModule from "./components/UserModule";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";
import "./styles/App.css"; // Global styles

const App = () => {
  return (
    <div className="App">
      <h1>Communication Tracking System</h1>
      <AdminModule />
      <UserModule />
      <Dashboard />
      <CalendarView />
    </div>
  );
};

export default App;
