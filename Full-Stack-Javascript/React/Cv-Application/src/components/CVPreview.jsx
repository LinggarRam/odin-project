const formatDate = (dateStr) => {
  if (!dateStr) return "present";
  const [year, month] = dateStr.split("-");
  const date = new Date(year, parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

const hasContent = (arr, key) => arr.some((item) => item[key]);

function CVPreview({ personalInfo, education, experience }) {
  const hasPersonalInfo = personalInfo.name || personalInfo.email;
  const hasEducation = hasContent(education, "school");
  const hasExperience = hasContent(experience, "company");

  if (!hasPersonalInfo && !hasEducation && !hasExperience) {
    return (
      <div className="cv-preview cv-empty">
        <div className="cv-empty-icon">📄</div>
        <h3>Your CV Preview</h3>
        <p>
          Start filling in the form on the left to see your cv appear here in
          real-time.
        </p>
      </div>
    );
  }

  return (
    <div className="cv-preview">
      {hasPersonalInfo && (
        <header className="cv-header">
          {hasPersonalInfo.name && (
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
        </header>
      )}

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

      {hasExperience && (
        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          {experience.map((exp) => {
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
            );
          })}
        </section>
      )}
    </div>
  );
}

export default CVPreview;
