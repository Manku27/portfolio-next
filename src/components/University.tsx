import { universityDetails } from "@/static/profile/experience";
import Image from "next/image";

const University = () => {
    return (<div className="flex flex-row items-center justify-between">
        <Image
            src={universityDetails.icon}
            width={50}
            height={50}
            alt={universityDetails.name}
        />
        <div className="flex flex-col items-center justify-between">
            <span>
                {universityDetails.name}
            </span>
            <span>
                {universityDetails.programme}
            </span>
            <span>
                {universityDetails.term}
            </span>
        </div>
    </div>);
}

export default University;
