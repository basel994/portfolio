import "./ProjectCard.css";

const ProjectCard = ({project}:{project:{header:string,summary:string,designed:string,link:string}}) => {
    return(
        <div className="project-card">
            <div className="card-header">
                <h2>{project.header}</h2>
                </div>
            <div className="card-body">
                <div className="summary">
                <p>
                    {project.summary}
                </p>
                </div>
                <div className="design">
                    <p>Designed using :</p>
                    <p>{project.designed}</p>
                </div>
            </div>
            <div className="card-footer">
                <a href={project.link}>Visit</a>
            </div>
        </div>
    )
}
export default ProjectCard;