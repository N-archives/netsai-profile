import React from "react";
import "./Experience.css";

const experiences = [
  {
    year: "2024 - Present",
    role: "Freelance Full-Stack Developer",
    company: "Independent Projects",
    description:
      "Developing web and mobile applications using React, React Native, Node.js, Java, and modern backend technologies. Building responsive user interfaces, REST APIs, and integrating third-party services."
  },

  {
    year: "2026",
    role: "Backend Developer (Java / Spring Boot)",
    company: "Personal & Portfolio Projects",
    description:
      "Building scalable backend applications using Java, Spring Boot, PostgreSQL, REST APIs, database design, authentication, and software architecture principles."
  },

  {
    year: "2026",
    role: "AI Application Development",
    company: "AI Projects",
    description:
      "Exploring AI-powered applications by integrating APIs, building chatbot solutions, and learning modern AI development workflows."
  }
];


function Experience(){

  return (

    <section id="experience" className="experience">

      <h2>Experience</h2>


      <div className="timeline">


        {
          experiences.map((item,index)=>(


            <div className="experience-card" key={index}>


              <div className="year">
                {item.year}
              </div>


              <div className="content">

                <h3>
                  {item.role}
                </h3>


                <h4>
                  {item.company}
                </h4>


                <p>
                  {item.description}
                </p>

              </div>


            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Experience;