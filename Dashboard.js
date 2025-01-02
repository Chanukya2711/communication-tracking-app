import React from "react";

const Dashboard = () => {
  // Sample Data for Companies
  const companies = [
    { name: "Company A", lastCommunications: ["Email - Jan 1", "Call - Dec 25"] },
    { name: "Company B", lastCommunications: ["LinkedIn Post - Dec 29", "Call - Dec 15"] },
  ];

  return (
    <div className="dashboard">
      <h3>Company Communications</h3>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Communications</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.lastCommunications.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
