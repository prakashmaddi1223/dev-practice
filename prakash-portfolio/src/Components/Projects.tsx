import Section from "./Section";

const projects = [
  {
    name: "Dev Connector",
    tech: "React.js · Javascript · Node.js · Express.js · MongoDB",
    description:
      "A mini developers platform where candidates can connect with other developers, filter by tech stack and apply. Focused on clean UI and reusable components.",
    // links: {
    //   github: "#",
    //   demo: "#",
    // },
  },
  {
    name: "Auth & Dashboard Demo",
    tech: "Next.js · JWT Auth · REST API",
    description:
      "Role-based authentication, protected routes and a simple admin dashboard for managing users and data.",
    // links: {
    //   github: "#",
    //   demo: "#",
    // },
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Selected Work">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex flex-col justify-between rounded-xl p-5 bg-blue-50 transition hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active"
          >
            <div>
              <h3 className="text-sm font-semibold text-black">
                {p.name}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-wide text-black ">
                {p.tech}
              </p>
              <p className="mt-3 text-xs text-black leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="mt-3 flex gap-3 text-[11px]">
              {/* {p.links.demo && (
                <a
                  href={p.links.demo}
                  className="text-loPrimary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  className="text-slate-300 hover:text-loPrimary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}