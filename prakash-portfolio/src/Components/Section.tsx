type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 ">
        <div className="mb-6">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-xl font-semibold text-black sm:text-2xl">
            {title}
          </h2>
          <div className="mt-2 h-0.5 w-16 bg-linear-to-r from-loPrimary to-loAccent" />
        </div>
        {children}
      </div>
    </section>
  );
}