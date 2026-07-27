import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p>Hello, I'm</p>

        <h1>Netsai Chiyaka</h1>

        <h2>Full-Stack Developer</h2>

        <p className="description">
          I build modern web applications, REST APIs, AI-powered software, and
          responsive user experiences using React, Java, Spring Boot, Django,
          and Node.js.
        </p>

        <div className="buttons">
          <button className="primary">Download CV</button>

          <button className="secondary">View Projects</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <img src={profile} alt="Netsai Chiyaka" />
      </motion.div>
    </section>
  );
}

export default Hero;
