export default function Services() {
  const items = [
    {
      title: "Strategy & Discovery",
      desc: "Workshops, product strategy, and roadmaps to align teams and outcomes.",
    },
    {
      title: "Design Systems",
      desc: "Scalable UI libraries, accessible patterns, and documentation.",
    },
    {
      title: "Web & App Development",
      desc: "High-performance websites and apps powered by modern frameworks.",
    },
    {
      title: "Brand & Creative",
      desc: "Visual identity, motion, and content systems that stand out.",
    },
  ];

  return (
    <section id="services" className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <span className="text-sm text-[--color-muted-foreground]">End-to-end services</span>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-5 md:p-6 hover:glow-brand transition-[box-shadow]">
            <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
            <h3 className="text-base md:text-lg font-medium">{it.title}</h3>
            <p className="prose-muted mt-2 text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
