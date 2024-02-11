import EmbeddedTweetList from "@/components/EmbeddedTweetList";
import { tweetsList } from "@/static/techEmbedList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        I love to talk about tech.
      </section>
      <section>
        <EmbeddedTweetList tweetsList={tweetsList} />
      </section>
    </main>
  );
}
