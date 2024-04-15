import ProjectCard from "../templates/ProjectCard"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectCard data-aos="fade-up" link="https://images.unsplash.com/photo-1642942552682-c9721be3d0cc?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <ProjectCard data-aos="fade-up" link="https://images.pexels.com/photos/12532792/pexels-photo-12532792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <ProjectCard/>
      <ProjectCard data-aos="fade-up"/>
    </section>
  )
}

export default Projects