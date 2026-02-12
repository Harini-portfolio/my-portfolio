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
      <section className="container text-center" data-aos="fade-up">
        <h1 className="fw-bold">Hi, I'm Harini </h1>
        <p className="mt-3">
          I’m a passionate software developer who loves building clean,
          scalable and user-friendly web applications. I enjoy learning new
          technologies and improving my skills every day.
        </p>
      </section>

      {}
      <section className="container">
        <h2 className="text-center mb-4" data-aos="fade-right">Skills</h2>

        <div className="row text-center">
          <div className="col-md-3 skill-box" data-aos="zoom-in">Python</div>
          <div className="col-md-3 skill-box" data-aos="zoom-in">JavaScript</div>
          <div className="col-md-3 skill-box" data-aos="zoom-in">React</div>

          <div className="col-md-3 skill-box" data-aos="zoom-in">Django</div>
          <div className="col-md-3 skill-box" data-aos="zoom-in">FastAPI</div>
          <div className="col-md-3 skill-box" data-aos="zoom-in">HTML & CSS</div>
          <div className="col-md-3 skill-box" data-aos="zoom-in">MySQL</div>
        </div>
      </section>

      {}
      <section className="container text-center" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Email: harinikathiresan2604@gmail.com</p>
        <p>Location: India</p>
      </section>

      {}
      <footer className="text-center bg-dark text-white p-3">
        © 2026 Harini | All Rights Reserved
      </footer>

    </div>
  );
}

export default App;