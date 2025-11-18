import Section from "./Section";

const experiences = [
  {
    role: "Frontend Developer",
    company: "LookOut AI",
    location: "Bengaluru (Remote)",
    period: "Dec 2024 – Present",
    bullets: [
      "Built responsive, high-performance UI screens with Next.js and TypeScript.",
      "Created reusable components and patterns for consistent UI and faster delivery.",
      "Integrated RESTful APIs and optimized async data fetching for better UX.",
      "Collaborated with UX, backend and DevOps in Agile sprints.",
    ],
  },
  {
    role: "Software Developer",
    company: "Oracle Cerner",
    location: "Bengaluru (Remote)",
    period: "Jun 2022 – Nov 2024",
    bullets: [
      "Developed UI components using React.js and Terra UI for healthcare workflows.",
      "Improved backend performance in Patient Accounting modules with Java, SQL and CCL.",
      "Refactored legacy modules to modern standards to reduce technical debt.",
      "Participated in CI/CD-driven deployments and cross-functional collaboration.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Work">
      <div className="space-y-6 ">
        {experiences.map((exp) => (
          <div
            key={exp.role + exp.company}
            className="flex flex-col justify-between rounded-xl bg-blue-50 hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-black">
                  {exp.role} ·{" "}
                  <span className="text-loPrimary">{exp.company}</span>
                </h3>
                <p className="text-xs text-gray-600">
                  {exp.location}
                </p>
              </div>
              <p className="text-xs text-black">{exp.period}</p>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-black ">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-loAccent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}