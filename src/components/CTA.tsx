export default function CTA() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute -inset-x-20 -top-20 h-40 blur-2xl opacity-25" style={{ background:
          "radial-gradient(600px 200px at 50% 50%, var(--brand), transparent)" }} />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to build something great?
        </h2>
        <p className="prose-muted mt-3 max-w-[60ch] mx-auto">
          Tell us about your goals and timelines. We’ll get back within 1 business day.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:hello@medx.agency" className="btn-brand px-6 py-3 rounded-md font-medium">
            hello@medx.agency
          </a>
          <a href="#" className="btn-outline px-6 py-3 rounded-md font-medium hover:border-[--brand]">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
