import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
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
