import Section from "./Section";

const groups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Terra UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Java", "Cerner Command Language (CCL)"],
  },
  {
    label: "Databases & Tools",
    items: ["MySQL", "MongoDB", "SQL Server", "Git", "GitHub", "Postman", "JIRA", "VS Code"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Tech Stack">
      <div className="grid gap-4 sm:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col rounded-xl bg-blue-50 transition hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active p-5"
          >
            <h3 className="text-xs font-bold uppercase tracking-wide text-black">
              {group.label}
            </h3>
            <ul className="mt-2 space-y-1 text-xs text-gray-800">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-loPrimary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}