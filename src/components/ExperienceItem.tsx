import { ExperienceListItem } from "@/static/profile/experience";
import Image from "next/image";

interface Props {
    details: ExperienceListItem
}

const ExperienceItem = ({ details }: Props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                    <Image
                        src={details.icon}
                        width={50}
                        height={50}
                        alt={details.name}
                    />
                    <span>
                        {details.position}
                    </span>
                    -
                    <span>
                        {details.name}
                    </span>
                    |
                    <span>
                        {details.period}
                    </span>
                </div>
                <ul>
                    {details.experience.map((item, ind) => <li key={ind}>
                        {item}
                    </li>)}
                </ul>

            </div>
        </>
    );
}

export default ExperienceItem;
