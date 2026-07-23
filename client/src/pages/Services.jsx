import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">

      <h2>Our Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>Organ Management</h3>
          <p>
            Post and manage available organs across hospitals
            in real time.
          </p>
        </div>

        <div className="service-card">
          <h3>Blood Management</h3>
          <p>
            Manage emergency blood requirements and donor
            availability efficiently.
          </p>
        </div>

        <div className="service-card">
          <h3>Hospital Verification</h3>
          <p>
            Securely onboard and verify hospitals before
            accessing transplantation services.
          </p>
        </div>

        <div className="service-card">
          <h3>Emergency Requests</h3>
          <p>
            Send and receive organ requests instantly during
            medical emergencies.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Services;