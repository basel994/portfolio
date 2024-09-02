import { useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import useInViewPort from "../../useInViewPort/useInViewPort";
import { myrojects } from "./myProjects";

const Projects = () => {
    const projectRef = useRef<HTMLDivElement>(null);
    const inViewport = useInViewPort(projectRef,{threshold:0});
    return(
        <div className={`projects ${inViewport?"show":null}`} id="myProjects" ref={projectRef}>
            <h1>Projects</h1>
            <div className="projects-list">
                {myrojects.map((project) => {
                    return(
                        <ProjectCard project={project}
                          />
                    )
                })}
            </div>
        </div>
    )
}
export default Projects;