import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-content">

        <h2>About Me</h2>

        <p>
          I am a Full-Stack Developer passionate about building modern,
          scalable software solutions. I specialize in creating responsive
          frontend applications, backend APIs, and AI-powered applications.
        </p>

        <p>
          My current technology stack includes React, React Native, Java,
          Spring Boot, Django, Node.js, PostgreSQL, and REST APIs. I enjoy
          solving real-world problems through clean, maintainable code.
        </p>

        <p>
          I continuously improve my skills by building practical projects,
          exploring cloud technologies, and learning modern software
          development practices.
        </p>

      </div>


      <div className="about-card">

        <div className="stat">
          <h3>7+</h3>
          <span>Years Coding Experience</span>
        </div>


        <div className="stat">
          <h3>10+</h3>
          <span>Projects Built</span>
        </div>


        <div className="stat">
          <h3>Full Stack</h3>
          <span>Developer</span>
        </div>

      </div>

    </section>
  );
}

export default About;