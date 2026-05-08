function Education({ data, onChange, onAdd, onRemove }) {
  return (
    <section className="form-section">
      <h2 className="section-title">
        <span className="section-icon">🎓</span>
        Education
      </h2>

      {data.map((edu, index) => (
        <div key={edu.id} className="entry-block">
          <div className="entry-header">
            <h3>Education #{index + 1}</h3>
            {data.length > 1 && (
              <button
                className="btn-remove"
                onClick={() => onRemove(edu.id)}
                type="button"
              >
                Remove
              </button>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group full-width">
              <label>School / University</label>
              <input
                type="text"
                placeholder="e.g. Universitas Indonesia"
                value={edu.school}
                onChange={(e) => onChange(edu.id, "school", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                placeholder="e.g. Bachelor's Degree"
                value={edu.degree}
                onChange={(e) => onChange(edu.id, "degree", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Field of Study</label>
              <input
                type="text"
                placeholder="e.g. Informatics Engineering"
                value={edu.fieldOfStudy}
                onChange={(e) =>
                  onChange(edu.id, "fieldOfStudy", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => onChange(edu.id, "startDate", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button className="btn-add" onClick={onAdd} type="button">
        + Add Education
      </button>
    </section>
  );
}

export default Education;
