export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 ">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-800 via-55% to-purple-700" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
          Frontend · Full Stack 
        </p>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
            Hi, I&apos;m {""}
            <span className="text-white">
              Prakash Maddi
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white sm:text-base">
            Frontend / Full Stack Developer with 3+ years of experience building
            scalable, performant web applications using React.js, Next.js, TypeScript,
            Node.js, and modern tooling.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-loPrimary px-5 py-2 text-xs font-semibold text-white hover:border border-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full  px-5 py-2 text-xs font-semibold text-white hover:border border-white"
          >
            Contact me
          </a>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col rounded-xl bg-linear-to-r from-blue-900 via-blue-850 to-blue-800 p-4 hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active">
            <div className="text-white font-semibold">Experience</div>
            <div className="mt-1 text-sm font-mediumbold text-slate-100">
              3+ years in React / Next.js / Node.js / TypeScript / Express js / SQL / NoSQL / REST APIs / JWT / Agile / Git / GitHub / CI-CD / Tailwind CSS / Cerner Command Language(CCL)
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-linear-to-r from-purple-900 via-purple-850 to-purple-800 p-4 hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active">
            <div className="text-white font-semibold">Current Focus</div>
            <div className="mt-1 text-sm font-mediumbold text-slate-100">
              Frontend & full stack roles (onsite, hybrid & remote)
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-linear-to-r from-blue-900 via-blue-850 to-blue-800 p-4 hover:scale-105 hover:shadow-xl duration-300 ease-in-out custom-card active">
            <div className="text-white font-semibold">Stack</div>
            <div className="mt-1 text-sm font-mediumbold text-slate-100">
              React · Next.js · TypeScript · Node.js · SQL / NoSQL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}