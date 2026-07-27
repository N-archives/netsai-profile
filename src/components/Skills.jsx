import React, { useEffect } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend & Mobile Development",
    skills: [
      "React.js",
      "React Native",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Mobile App Development",
      "Android Deployment",
      "iOS Deployment",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "Django",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Third-party Integrations",
    ],
  },

  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design", "SQL"],
  },

  {
    title: "Tools, Platforms & AI",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Notion",
      "Slack",
      "Postman",
      "Docker",
      "CI/CD",
      "OpenAI API",
      "Google Play Console",
      "Apple App Store Connect",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            whileHover={{
              scale: 1.05,
            }}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
