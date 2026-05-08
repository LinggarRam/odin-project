import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import Skills from "./components/Skills";
import "./styles/App.css";

function App() {
  /* ── Dark Mode ── */
  const [darkMode, setDarkMode] = useState(false);

  /* ── Save status ── */
  const [saveStatus, setSaveStatus] = useState(""); // "" | "saved" | "error"

  /* ── Validation errors ── */
  const [errors, setErrors] = useState({});

  /* ── Personal Info ── */
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    photo: "",
  });

  /* ── Education ── */
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

  /* ── Experience ── */
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

  /* ── Skills ── */
  const [skills, setSkills] = useState([]);

  /* ════════════════════════════════
     Handlers
  ════════════════════════════════ */

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
    // Hapus error field yg sudah diisi
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
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
        fieldOfStudy: "",
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

  const handleAddSkill = (skill) => setSkills((prev) => [...prev, skill]);
  const handleRemoveSkill = (skill) =>
    setSkills((prev) => prev.filter((s) => s !== skill));

  /* ════════════════════════════════
     Validation
  ════════════════════════════════ */
  const validate = () => {
    const errs = {};
    if (!personalInfo.name.trim()) errs.name = "Full name is required.";
    if (!personalInfo.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
      errs.email = "Invalid email format.";
    }
    if (!personalInfo.phone.trim()) errs.phone = "Phone number is required.";
    if (!personalInfo.address.trim()) errs.address = "Address is required.";
    return errs;
  };

  /* ════════════════════════════════
     Save to localStorage
  ════════════════════════════════ */
  const handleSave = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSaveStatus("error");
      return;
    }
    setErrors({});
    try {
      localStorage.setItem("cv-personalInfo", JSON.stringify(personalInfo));
      localStorage.setItem("cv-education", JSON.stringify(education));
      localStorage.setItem("cv-experience", JSON.stringify(experience));
      localStorage.setItem("cv-skills", JSON.stringify(skills));
      setSaveStatus("saved");
    } catch (e) {
      if (e instanceof DOMException && e.name === "QuotaExceededError") {
        setSaveStatus("quota");
      } else {
        setSaveStatus("storageError");
      }
    }
    setTimeout(() => setSaveStatus(""), 4000);
  };

  /* ════════════════════════════════
     Print — hanya CV Preview
  ════════════════════════════════ */
  const handlePrint = () => window.print();

  /* ════════════════════════════════
     Render
  ════════════════════════════════ */
  return (
    <div className={`app${darkMode ? " dark-mode" : ""}`}>
      <header className="app-header">
        <div className="app-header-content">
          <div>
            <h1>📄 CV Builder</h1>
            <p>Fill in your information to generate your CV</p>
          </div>
          <button
            className="btn-dark-mode"
            onClick={() => setDarkMode((d) => !d)}
            title="Toggle dark mode"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <div className="app-body">
        {/* ── Form column ── */}
        <div className="form-column">
          <PersonalInfo
            data={personalInfo}
            onChange={handlePersonalChange}
            errors={errors}
          />
          <Skills
            data={skills}
            onAdd={handleAddSkill}
            onRemove={handleRemoveSkill}
          />
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

          {/* ── Save & Print buttons ── */}
          <div className="form-actions">
            {saveStatus === "saved" && (
              <span className="save-msg save-success">
                ✅ Data berhasil disimpan!
              </span>
            )}
            {saveStatus === "error" && (
              <span className="save-msg save-error">
                ⚠️ Lengkapi field yang wajib diisi.
              </span>
            )}
            {saveStatus === "quota" && (
              <span className="save-msg save-error">
                ⚠️ Penyimpanan penuh. Coba hapus foto atau kurangi data.
              </span>
            )}
            {saveStatus === "storageError" && (
              <span className="save-msg save-error">
                ⚠️ Gagal menyimpan. Browser mungkin memblokir localStorage.
              </span>
            )}
            <button className="btn-save" onClick={handleSave}>
              💾 Save
            </button>
            <button className="btn-print" onClick={handlePrint}>
              🖨️ Print CV
            </button>
          </div>
        </div>

        {/* ── Preview column ── */}
        <div className="preview-column">
          <CVPreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
            skills={skills}
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
