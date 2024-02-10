import { TechStackListItem } from "@/static/profile/techStackList"
import Image from "next/image"

interface Props {
    list: TechStackListItem[]
}

export const TechStackRow = ({ list }: Props) => {
    return <>
        <div className="flex flex-row items-center justify-between p-10">
            {list.map((item) =>
                <div key={item.alt} className="flex flex-col items-center">
                    <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        alt={item.alt}
                    />
                    <div className="p-2">{item.alt}</div>
                </div>
            )}
        </div>
    </>
}
