import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import University from "@/components/University";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div>{`Hey you. You're finally awake.`}</div>
        <div>
          I am an experienced front-end developer with a growing interest in back-end technologies.
          Skilled in project leadership and independent contribution.
          Known for quickly grasping new concepts and delivering effective solutions to business challenges.
        </div>
      </section>
      <section>
        I love to explore technologies, but these are what I am most experienced at.

        <TechStack />
      </section>
      <section>
        I have had the privilge of working for several organisations like

        <Experience />
      </section>
      <section>
        I have been very intrigued by the internet since my college days, I have worked on a few projects like

        <Projects />

        check out my github for more
      </section>
      <section>
        I went here for Engineering

        <University />
      </section>
      <section>
        Get my resume
      </section>
      <section>
        {`Let's connect socially`}
      </section>
    </main>
  );
}
