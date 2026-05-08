function PersonalInfo({ data, onChange }) {
  return (
    <section className="form-section">
      <h2 className="section-title">
        <span className="section-icon">👤</span>
        Personal Information
      </h2>

      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g Your Name"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g youremail@gmail.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="phone"
            id="phone"
            placeholder="e.g +62 812-3456-7899"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="e.g Ponorogo,East Java,Indonesia"
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            placeholder="Write a short summary about yourself..."
            rows={4}
            value={data.summary}
            onChange={(e) => onChange("summary", e.target.value)}
          ></textarea>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
