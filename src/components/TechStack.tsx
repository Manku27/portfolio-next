import { backend, devops, frontend, others } from "@/static/profile/techStackList";
import { TechStackRow } from "./TechStackRow";

const TechStack = () => {
    return <>
        <div className="flex flex-col items-center justify-between ">
            <TechStackRow list={frontend} />
            <TechStackRow list={backend} />
            <TechStackRow list={devops} />
            <TechStackRow list={others} />
        </div>
    </>
}

export default TechStack;
