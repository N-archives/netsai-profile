import "./Projects.css";

const projects = [
  {
    title: "AI Chatbot Platform",
    description:
      "An AI-powered chatbot application integrating OpenAI API to provide intelligent conversations, context handling, and automated responses.",
    technologies:
      "React, Java, Spring Boot, OpenAI API, REST API",
    github: "#",
  },

  {
    title: "ChessHub Management System",
    description:
      "A chess club management platform for managing members, tournaments, registrations, pairings, and leaderboards.",
    technologies:
      "Java, Spring Boot, Thymeleaf, PostgreSQL",
    github: "#",
  },

  {
    title: "GymCore Booking API",
    description:
      "A fitness management backend system handling users, trainers, classes, and booking availability.",
    technologies:
      "Spring Boot, PostgreSQL, REST API",
    github: "#",
  },

  {
    title: "GSURF Website",
    description:
      "A responsive organization website with content management, SEO features, and user-friendly navigation.",
    technologies:
      "Django, HTML, CSS, Bootstrap",
    github: "#",
  },

  {
    title: "Banking System",
    description:
      "A Java application demonstrating object-oriented programming principles including encapsulation, inheritance, and polymorphism.",
    technologies:
      "Java, OOP, Collections",
    github: "#",
  },

  {
    title: "ChiacaWebsolutions",
    description:
      "A digital solutions website showcasing web development, branding, and digital marketing services.",
    technologies:
      "WordPress, Elementor, SEO",
    github: "#",
  },
];


function Projects(){

  return (

    <section id="projects" className="projects">

      <h2>Featured Projects</h2>


      <div className="project-grid">


        {projects.map((project,index)=>(


          <div className="project-card" key={index}>


            <h3>{project.title}</h3>


            <p>
              {project.description}
            </p>


            <span>
              {project.technologies}
            </span>


            <a href={project.github}>
              View Project →
            </a>


          </div>


        ))}


      </div>


    </section>

  );

}


export default Projects;