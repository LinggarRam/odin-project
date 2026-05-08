import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (id, field, value) => {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    );
  };

  const handleAddEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveEducation = (id) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>CV Builder</h1>
        <p>Fill in your information to generate your CV</p>
      </header>

      <div className="app-body">
        <div className="form-column">
          <PersonalInfo data={personalInfo} onChange={handlePersonalChange} />
          <Education
            data={education}
            onChange={handleEducationChange}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
          />
        </div>
        <div className="preview-column"></div>
      </div>

      <footer className="app-footer">
        <p>&copy; Mei 2026 - LINGGAR RAMADHAN</p>
      </footer>
    </div>
  );
}

export default App;
