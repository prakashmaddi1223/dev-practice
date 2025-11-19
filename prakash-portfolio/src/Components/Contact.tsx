import Section from "./Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Reach Out">
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm text-black leading-relaxed p-4 rounded-2xl bg-blue-50 transition hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active">
            I&apos;m actively exploring frontend and full stack opportunities
            (onsite, hybrid and remote). If you&apos;d like to discuss a role,
            a project or collaboration, feel free to reach out.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p className="text-black">
              Email:{" "}
              <a
                href="mailto:prakashmaddi325@gmail.com"
                className="text-loPrimary hover:underline"
              >
                prakashmaddi325@gmail.com
              </a>
            </p>
            <p className="text-black">
              Location: <span className="text-black">Hyderabad, India</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
