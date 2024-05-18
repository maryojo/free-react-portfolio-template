import React from 'react';
import ProjectCard from "../templates/ProjectCard"


const Projects = () => {
  return (
    <section className="flex flex-col gap-4">
    <h2 className="font-bold text-[32px]">My Work</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectCard link="https://images.unsplash.com/photo-1642942552682-c9721be3d0cc?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <ProjectCard link="https://images.pexels.com/photos/12532792/pexels-photo-12532792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
    </section>
  )
}

export default Projects