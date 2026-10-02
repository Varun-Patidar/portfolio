import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>
          © {new Date().getFullYear()} Varun Patidar. All rights reserved.
        </p>

        <p>
          Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;