import React, { useState } from "react";

const AdminModule = () => {
  const [companies, setCompanies] = useState([]);
  const [communicationMethods, setCommunicationMethods] = useState([
    "LinkedIn Post",
    "LinkedIn Message",
    "Email",
    "Phone Call",
    "Other",
  ]);

  const addCompany = (company) => {
    setCompanies([...companies, company]);
  };

  return (
    <div className="admin-module">
      <h2>Admin Panel</h2>
      <div>
        <h3>Company Management</h3>
        {/* Add company management logic here */}
      </div>
      <div>
        <h3>Communication Methods</h3>
        <ul>
          {communicationMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminModule;

