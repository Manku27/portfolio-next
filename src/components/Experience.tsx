import { experienceList } from "@/static/profile/experience";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    return <>
        <div className="flex flex-col flex-col items-center justify-between">
            {experienceList.map((experienceListItem) => <ExperienceItem key={experienceListItem.name} details={experienceListItem} />)}
        </div>
    </>;
}

export default Experience;
