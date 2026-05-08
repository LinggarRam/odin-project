import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
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

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      responsibilities: "",
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

  const handleExperienceChange = (id, field, value) => {
    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
  };

  const handleAddExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveExperience = (id) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📄 CV Builder</h1>
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
          <Experience
            data={experience}
            onChange={handleExperienceChange}
            onAdd={handleAddExperience}
            onRemove={handleRemoveExperience}
          />
        </div>
        <div className="preview-column">
          <CVPreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          />
        </div>
      </div>

      <footer className="app-footer">
        <p>&copy; Mei 2026 - LINGGAR RAMADHAN</p>
      </footer>
    </div>
  );
}

export default App;
