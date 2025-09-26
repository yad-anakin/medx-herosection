 "use client";

import CardSwap, { Card } from "@/components/CardSwap";

export default function Work() {
  const projects = [
    {
      title: "for all",
      desc: "We make healthcare accessible everywhere.",
      tag: "Health",
    },
    {
      title: "in knowledge",
      desc: "Reliable medical information at your fingertips.",
      tag: "Trust",
    },
    {
      title: "of care",
      desc: "Building digital solutions for healthier communities.",
      tag: "Future",
    },
  ];

  return (
    <section id="work" className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Our mission</h2>
        <span className="text-sm text-[--color-muted-foreground]">What we stand for</span>
      </div>

      <div className="mt-16 w-full flex justify-center items-center min-h-[400px] md:min-h-[460px] lg:min-h-[520px] -ml-7">
        <CardSwap
          width={"min(92vw, 680px)"}
          height={"calc(min(92vw, 680px) * 0.6)"}
          cardDistance={60}
          verticalDistance={70}
          delay={4500}
          pauseOnHover
          easing="elastic"
        >
          {projects.map((p, i) => (
            <Card key={p.title} customClass="p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[--color-muted-foreground]">{p.tag}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
              </div>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="prose-muted mt-2 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 w-full flex items-center justify-center">
                <img
                  src={i % 2 === 0 ? "/kdhn.png" : "/kdhnb.png"}
                  alt={i % 2 === 0 ? "KDHN" : "KDHN Badge"}
                  className="h-24 md:h-32 lg:h-40 object-contain mx-auto"
                />
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
}
