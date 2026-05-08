function Experience({ data, onChange, onAdd, onRemove }) {
  return (
    <section className="form-section">
      <h2 className="section-title">
        <span className="section-icon">💼</span>
        Work Experience
      </h2>
      {data.map((exp, index) => (
        <div key={exp.id} className="entry-block">
          <div className="entry-header">
            <h3>Experience #{index + 1}</h3>
            {data.length > 1 && (
              <button
                className="btn-remove"
                onClick={() => onRemove(exp.id)}
                type="button"
              >
                Remove
              </button>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="e.g. Google Indonesia"
                value={exp.company}
                onChange={(e) => onChange(exp.id, "company", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Position / Title</label>
              <input
                type="text"
                placeholder="e.g. Manager"
                value={exp.position}
                onChange={(e) => onChange(exp.id, "position", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => onChange(exp.id, "startDate", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => onChange(exp.id, "endDate", e.target.value)}
              />
            </div>

            <div className="form-group full-width">
              <label>Key Responsibilities</label>
              <textarea
                placeholder="Describe your main responsibilities and achievements...."
                rows={4}
                value={exp.responsibilities}
                onChange={(e) =>
                  onChange(exp.id, "responsibilities", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <button className="btn-add" onClick={onAdd} type="button">
        + Add Experience
      </button>
    </section>
  );
}

export default Experience;
