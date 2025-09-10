export default function Work() {
  const projects = [
    {
      title: "Health Platform",
      desc: "Next.js + edge API for real-time appointments and dashboards.",
      tag: "Web App",
    },
    {
      title: "AI Knowledge Base",
      desc: "Semantic search with vector DB and clean product UI.",
      tag: "Product",
    },
    {
      title: "Marketing Site",
      desc: "Lightning-fast content site with rich animations.",
      tag: "Website",
    },
  ];

  return (
    <section id="work" className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
        <span className="text-sm text-[--color-muted-foreground]">Recent projects</span>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group card p-5 md:p-6 overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[--color-muted-foreground]">{p.tag}</span>
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
            </div>
            <h3 className="mt-3 text-lg font-medium tracking-tight">{p.title}</h3>
            <p className="prose-muted mt-2 text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-4 h-32 rounded-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ background:
                "radial-gradient(600px 200px at 20% 50%, var(--brand), transparent)" }} />
              <div className="absolute inset-0 border border-[--color-border] rounded-md" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
