import React, { useEffect } from "react";
import AOS from "aos";
import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>

      {}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Harini</a>
        </div>
      </nav>

      {}
      <section className="container text-center mt-5 pt-5" data-aos="fade-up">
        <h1 className="fw-bold">Hi, I'm Harini </h1>
        <p className="mt-3">
          I’m a passionate software developer who loves building clean,
          scalable and user-friendly web applications.
        </p>
      </section>

      {}
      <section className="container text-center" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Email: harinikathiresan2604@gmail.com</p>
        <p>Location: India</p>

        <a
          href="/resume.pdf"
          className="btn btn-primary mt-3"
          download
        >
          Download Resume
        </a>
      </section>

      {}
      <footer className="text-center bg-dark text-white p-3">
        © 2026 Harini | All Rights Reserved
      </footer>

    </div>
  );
}

export default App;