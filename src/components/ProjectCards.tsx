import { ProjectItem } from "@/static/profile/projects";

interface Props {
    details: ProjectItem
}

const ProjectCards = ({ details }: Props) => {
    return (<>
        <div className="flex flex-col items-center justify-between">
            <div className="flex items-center">
                <span>
                    {details.name}
                </span>
                -
                <span>
                    {details.type}
                </span>
            </div>
            {details.projectDetails.map((item) => <li key={item}>{item}</li>)}
        </div>
    </>);
}

export default ProjectCards;
