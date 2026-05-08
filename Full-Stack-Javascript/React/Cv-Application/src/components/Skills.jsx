import { useState } from "react";
import "../styles/PersonalInfo.css";
import "../styles/Skills.css";

function Skills({ data, onAdd, onRemove }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !data.includes(trimmed)) {
      onAdd(trimmed);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <section className="form-section">
      <h2 className="section-title">
        <span className="section-icon">⚡</span>
        Skills
      </h2>

      <div className="skills-input-row">
        <input
          type="text"
          className="skills-input"
          placeholder="e.g. JavaScript, React... lalu tekan Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="btn-add-skill" onClick={handleAdd}>
          + Add
        </button>
      </div>

      {data.length > 0 && (
        <div className="skills-chips">
          {data.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
              <button
                type="button"
                className="skill-chip-remove"
                onClick={() => onRemove(skill)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export default Skills;
