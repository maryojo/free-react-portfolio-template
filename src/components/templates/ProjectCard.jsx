import ProjectHoverCard from "./ProjectHoverCard"

const ProjectCard = ({link}) => {
  return (
    <div className="bg-green-600 h-[600px]  cursor-pointer relative">
    <img src={link} className="absolute object-cover w-full h-full"/>
    <ProjectHoverCard/>
    </div>
  )
}

export default ProjectCard