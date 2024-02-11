import { Tweet } from "react-tweet";

interface Props {
    tweetsList: string[]
}

const EmbeddedTweetList = ({ tweetsList }: Props) => {
    return <div className="flex  min-h-screen  flex-col items-center justify-between p-24">
        {tweetsList.map((tweetId) => <Tweet id={tweetId} key={tweetId} />)}
    </div>
}

export default EmbeddedTweetList;
