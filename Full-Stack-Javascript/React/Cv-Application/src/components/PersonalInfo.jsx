import "../styles/PersonalInfo.css";

function PersonalInfo({ data, onChange, errors = {} }) {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange("photo", ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <section className="form-section">
      <h2 className="section-title">
        <span className="section-icon">👤</span>
        Personal Information
      </h2>

      {/* ── Photo Upload ── */}
      <div className="photo-row">
        <div className="photo-preview">
          {data.photo ? (
            <img src={data.photo} alt="Profile" className="photo-img" />
          ) : (
            <div className="photo-placeholder">👤</div>
          )}
        </div>
        <div className="photo-actions">
          <label className="btn-upload-photo" htmlFor="photo-input">
            📷 Upload Photo
          </label>
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          {data.photo && (
            <button
              type="button"
              className="btn-remove-photo"
              onClick={() => onChange("photo", "")}
            >
              Remove
            </button>
          )}
          <p className="photo-hint">JPG, PNG. Max 1MB disarankan.</p>
        </div>
      </div>

      {/* ── Form Fields ── */}
      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="name">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g Your Name"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g youremail@gmail.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <span className="required-star">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="e.g +62 812-3456-7899"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="address">
            Address <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="e.g Ponorogo,East Java,Indonesia"
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
            className={errors.address ? "input-error" : ""}
          />
          {errors.address && (
            <span className="error-msg">{errors.address}</span>
          )}
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
