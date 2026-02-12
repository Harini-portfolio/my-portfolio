import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Harini</a>
        </div>
      </nav>

      {/* About */}
      <section className="container text-center text-white mt-5 pt-5" data-aos="fade-up">
        <h1 className="fw-bold">Hi, I'm Harini </h1>
        <p className="mt-3">
          Passionate Full Stack Developer building modern web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="container text-center text-white" data-aos="fade-up">
        <h2 className="mb-4">Skills</h2>
        <div className="row">

          {[
            "Python", "React", "JavaScript", "Django",
            "FastAPI", "MySQL"
          ].map((skill, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="skill-card">
                {skill}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact */}
      <section className="container text-center text-white" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Email: harini@email.com</p>

        <a
          href="resume.pdf"
          className="btn btn-primary mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-white p-3">
        © 2026 Harini | All Rights Reserved
      </footer>

    </div>
  );
}

export default App;