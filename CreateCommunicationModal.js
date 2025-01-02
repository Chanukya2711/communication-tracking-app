import React, { useState } from "react";

const CreateCommunicationModal = ({ onCreate, onClose }) => {
  const [communicationType, setCommunicationType] = useState("Email");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes.trim()) {
      setError("Notes are required!");
      return;
    }

    const newCommunication = {
      type: communicationType,
      date: new Date().toLocaleDateString(),
      notes,
    };

    setError(""); // Clear error
    onCreate(newCommunication);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create Communication</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Communication Type:
            <select
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
            >
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="LinkedIn Message">LinkedIn Message</option>
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add additional notes"
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Add Communication</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunicationModal;
