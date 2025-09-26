export default function CTA() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <div className="card p-8 md:p-12 text-center relative overflow-hidden" style={{ ['--brand' as any]: '#3b82f6' }}>
        <div className="absolute -inset-x-20 -top-20 h-40 blur-2xl opacity-25" style={{ background:
          "radial-gradient(600px 200px at 50% 50%, var(--brand), transparent)" }} />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to build something great?
        </h2>
        <p className="prose-muted mt-3 max-w-[60ch] mx-auto">
          Tell us about your goals and timelines. We’ll get back within 1 business day.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:kdhn-team1@gmail.com"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-white bg-[#0b2a6f3b] hover:bg-[#0a245f] border border-[#0d2f7a] transition-colors"
          >
            kdhn-team1@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

