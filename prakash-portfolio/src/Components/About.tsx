import Section from "./Section";

export function About() {
  return (
    <Section id="about" title="About" eyebrow="Profile">
      <p className="text-sm leading-relaxed text-black p-4 rounded-2xl bg-blue-50 transition hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active">
        I&apos;m a Frontend / Full Stack Developer with over 3 years of experience
        building scalable, production-grade web applications using React.js, Next.js,
        TypeScript, Node.js and modern tooling. I enjoy working on performance,
        clean architecture, and creating reliable user experiences in collaboration
        with designers, backend engineers and product teams.
      </p>
    </Section>
  );
}