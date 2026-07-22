import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hello, I'm</p>

        <h1>Netsai Chiyaka</h1>

        <h2>Full-Stack Developer</h2>

        <p className="description">
          I build modern web applications, REST APIs, AI-powered software,
          and responsive user experiences using React, Java, Spring Boot,
          Django, and Node.js.
        </p>

        <div className="buttons">
          <button className="primary">Download CV</button>
          <button className="secondary">View Projects</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://placehold.co/400x400"
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Hero;