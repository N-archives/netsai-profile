import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot Platform",
    description:
      "An AI-powered chatbot application integrating OpenAI API to provide intelligent conversations, context handling, and automated responses.",
    technologies: "React, Java, Spring Boot, OpenAI API, REST API",
    
  },

  {
    title: "ChessHub Management System",
    description:
      "A chess club management platform for managing members, tournaments, registrations, pairings, and leaderboards.",
    technologies: "Java, Spring Boot, Thymeleaf, PostgreSQL",
    github: "https://github.com/madzimai/chessyhub",
  },

  {
    title: "GymCore Booking API",
    description:
      "A fitness management backend system handling users, trainers, classes, and booking availability.",
    technologies: "Spring Boot, PostgreSQL, REST API",
    github: "https://github.com/JustJavaOrg",
  },

  {
  title: "GSURF Website",

  description:
    "Designed and deployed a responsive website for GSURF featuring research publications, project showcases, team profiles, news management, authentication, and an administrator dashboard. Successfully deployed the application to production with a custom domain.",

  technologies: [
    "Django",
    "Python",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript",
    "SQLite",
    "Render",
    "Hostinger"
  ],

  features: [
    "Responsive Website",
    "User Authentication",
    "Admin Dashboard",
    "News Management",
    "Research Portal",
    "Project Showcase",
    "Team Profiles",
    "Contact Form",
    "SEO Sitemap",
    "Custom Domain Deployment"
  ],

  github: "https://github.com/madzimai/gsurf-website",

  live: "https://gsurfglobal.org"
},

  {
    title: "Banking System",
    description:
      "A Java application demonstrating object-oriented programming principles including encapsulation, inheritance, and polymorphism.",
    technologies: "Java, OOP, Collections",
    github: "https://github.com/madzimai/banking",
  },

  {
    title: "ChiacaWebsolutions",
    description:
      "A digital solutions website showcasing web development, branding, and digital marketing services.",
    technologies: "WordPress, Elementor, SEO",
    live: "https://chiacawebsolutions.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.technologies}</span>

            <a href={project.github}>View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
