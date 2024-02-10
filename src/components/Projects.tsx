import { projectList } from "@/static/profile/projects";
import ProjectCards from "./ProjectCards";

const Projects = () => {
    return (<div className="flex flex-col items-center justify-between">
        {projectList.map((project) => <ProjectCards details={project} key={project.name} />)}
    </div>);
}

export default Projects;
