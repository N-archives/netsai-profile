import React from "react";
import "./Contact.css";

function Contact(){

    return (

        <section id="contact" className="contact">


            <h2>Contact Me</h2>


            <p>
                Interested in working together?
                Feel free to reach out.
            </p>


            <div className="contact-container">


                <div className="contact-info">


                    <h3>
                        Let's Connect
                    </h3>


                    <p>
                        I am open to remote opportunities,
                        freelance projects, and collaborations.
                    </p>


                    <div className="links">

                        <a href="https://github.com/madzimai">
                            GitHub
                        </a>
                        <a href="https://dev.to/madzimai">
                        Dev.to
                        </a>

                        <a href="https://www.linkedin.com/in/netsai-chiyaka-18b491264/">
                            LinkedIn
                        </a>

                        <a href="mailto:netsaichiyaka@gmail.com">
                            Email
                        </a>

                        <a href="https://wa.me/26377767033">
                            WhatsApp
                        </a>


                    </div>


                </div>



                <form className="contact-form">


                    <input
                        type="text"
                        placeholder="Your Name"
                    />


                    <input
                        type="email"
                        placeholder="Your Email"
                    />


                    <textarea
                        placeholder="Your Message"
                        rows="5"
                    />


                    <button>
                        Send Message
                    </button>


                </form>


            </div>


        </section>

    );

}


export default Contact;