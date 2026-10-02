import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <p>Contact</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p className="section-description">
            Feel free to reach out for opportunities, collaborations, or just to
            connect.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-label">Email</span>

              <a href="mailto:yourname@gmail.com">pvarunpatidar379@gmail.com</a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href="tel:+91XXXXXXXXXX">+91 7974424889</a>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/Varun-Patidar"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Varun-Patidar ↗
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/varun-patidar-88bb63328/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq%2Bht6XVWQxK8kb%2BTQMkx1g%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
