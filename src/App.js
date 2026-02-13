import './App.css';

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <h2>Harini</h2>
      </header>

      {/* HERO SECTION */}
      <section className="hero"></section>
        <div className="hero-text">
          <h1>Hi, I'm <span>Harini</span></h1>
          <p>Full Stack Developer</p>
           <a href={process.env.PUBLIC_URL + "/resume.pdf"}
           target="_blank" 
           rel="noreferrer" 
           className="btn">
            View Resume
          </a>
        </div>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I build modern web applications using Python and React.
          I love creating attractive and responsive websites.
        </p>
      </section>
         <section className="skills">
  <h2>Skills</h2>

  <div className="skill-box">Python</div>
  <div className="skill-box">React</div>
  <div className="skill-box">JavaScript</div>
  <div className="skill-box">Html</div>
  <div className="skill-box">CSS</div>
</section>
<section className="contact">
  <h2>Contact Me</h2>
  <p>Email: harinikathiresan2604@gmail.com</p>
  <p>Phone: 1234567890</p>
</section>
    </div>
  );
}

export default App;