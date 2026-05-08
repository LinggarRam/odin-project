import "../styles/CVPreview.css";

const formatDate = (dateStr) => {
  if (!dateStr) return "Present";
  if (/^\d{4}$/.test(dateStr.trim())) return dateStr.trim();
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

const hasContent = (arr, key) => arr.some((item) => item[key]);

function CVPreview({ personalInfo, education, experience, skills = [] }) {
  const hasPersonalInfo = personalInfo.name || personalInfo.email;
  const hasEducation = hasContent(education, "school");
  const hasExperience = hasContent(experience, "company");
  const hasSkills = skills.length > 0;

  if (!hasPersonalInfo && !hasEducation && !hasExperience && !hasSkills) {
    return (
      <div className="cv-preview cv-empty">
        <div className="cv-empty-icon">📄</div>
        <h3>Your CV Preview</h3>
        <p>
          Start filling in the form on the left to see your CV appear here in
          real-time.
        </p>
      </div>
    );
  }

  return (
    <div className="cv-preview" style={{ textTransform: "uppercase" }}>
      {/* ── Header / Personal Info ── */}
      {hasPersonalInfo && (
        <header className="cv-header">
          <div className="cv-header-body">
            <div className="cv-header-text">
              {personalInfo.name && (
                <h1 className="cv-name">{personalInfo.name}</h1>
              )}
              <div className="cv-contact">
                {personalInfo.email && <span>✉ {personalInfo.email}</span>}
                {personalInfo.phone && <span>📞 {personalInfo.phone}</span>}
                {personalInfo.address && <span>📍 {personalInfo.address}</span>}
              </div>
              {personalInfo.summary && (
                <p className="cv-summary">{personalInfo.summary}</p>
              )}
            </div>

            {/* ── Photo pojok kanan ── */}
            <div className="cv-photo-wrap">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt="Profile"
                  className="cv-photo"
                />
              ) : (
                <div className="cv-photo-placeholder">👤</div>
              )}
            </div>
          </div>
        </header>
      )}

      {/* ── Skills ── */}
      {hasSkills && (
        <section className="cv-section">
          <h2 className="cv-section-title">Skills</h2>
          <div className="cv-skills-chips">
            {skills.map((skill) => (
              <span key={skill} className="cv-skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ── Education ── */}
      {hasEducation && (
        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          {education.map(
            (edu) =>
              edu.school && (
                <div key={edu.id} className="cv-entry">
                  <div className="cv-entry-header">
                    <div>
                      <h3 className="cv-entry-title">{edu.school}</h3>
                      {(edu.degree || edu.fieldOfStudy) && (
                        <p className="cv-entry-subtitle">
                          {edu.degree}
                          {edu.degree && edu.fieldOfStudy && " - "}
                          {edu.fieldOfStudy}
                        </p>
                      )}
                    </div>
                    {(edu.startDate || edu.endDate) && (
                      <span className="cv-entry-date">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    )}
                  </div>
                </div>
              ),
          )}
        </section>
      )}

      {/* ── Experience ── */}
      {hasExperience && (
        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          {experience.map(
            (exp) =>
              exp.company && (
                <div key={exp.id} className="cv-entry">
                  <div className="cv-entry-header">
                    <div>
                      <h3 className="cv-entry-title">{exp.company}</h3>
                      {exp.position && (
                        <p className="cv-entry-subtitle">{exp.position}</p>
                      )}
                    </div>
                    {(exp.startDate || exp.endDate) && (
                      <span className="cv-entry-date">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    )}
                  </div>
                  {exp.responsibilities && (
                    <p className="cv-entry-desc">{exp.responsibilities}</p>
                  )}
                </div>
              ),
          )}
        </section>
      )}
    </div>
  );
}

export default CVPreview;
