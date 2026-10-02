import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p>Education</p>

          <h2>
            My <span>Education</span>
          </h2>
        </div>

        {/* B.Tech */}
        <div className="education-card">

          <div className="education-details">

            <p className="education-degree">
              Bachelor's Degree
            </p>

            <h3>
              B.Tech in Computer Science Information Technology
            </h3>

            <p className="education-institute">
              Institute of Engineering & Science, IPS Academy, Indore
            </p>

            <p className="education-description">
              Expected Graduation: 2028
            </p>

          </div>

          <div className="education-year">
            2028
          </div>

        </div>


        {/* Class XII */}
        <div className="education-card">

          <div className="education-details">

            <p className="education-degree">
              Higher Secondary
            </p>

            <h3>
              Class XII (CBSE)
            </h3>

            <p className="education-institute">
              Aaditya Vidya Vihar, Khargone
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;