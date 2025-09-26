"use client";

import LogoLoop from "@/components/LogoLoop";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function Services() {
  return (
    <section id="idea" className="container-px mx-auto max-w-6xl py-20 md:py-28" style={{ backgroundColor: '#000000' }}>
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Our idea</h2>
      </div>

      <div className="mt-8 flex w-full justify-center">
        <InfiniteScroll
          width="42rem"
          maxHeight="32rem"
          negativeMargin="-0.75em"
          itemMinHeight={160}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.6}
          autoplayDirection="down"
          pauseOnHover={true}
          items={[
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Smart Health</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">AI-assisted guidance for everyday care</p>
              </div>
            )},
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Trusted Medical Info</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">Clear answers, reviewed by experts</p>
              </div>
            )},
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Connected Care Networks</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">Linking people to nearby services</p>
              </div>
            )},
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Digital Health in Kurdistan</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">Localized tools that work for everyone</p>
              </div>
            )},
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Accessible Tips</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">Reliable guidance, whenever you need it</p>
              </div>
            )},
            { content: (
              <div className="card p-5 md:p-6">
                <div className="h-6 w-6 rounded-full mb-4" style={{ background: "var(--brand)" }} />
                <h3 className="text-base md:text-lg font-medium">Empowered Decisions</h3>
                <p className="prose-muted mt-2 text-sm leading-relaxed">Helping patients choose with confidence</p>
              </div>
            )},
          ]}
        />
      </div>

       {/* Trusted by section */}
       <div className="relative z-10 mt-12">
         <div className="container-px mx-auto max-w-6xl">
           <div className="text-center text-xs uppercase tracking-wide text-[--color-muted-foreground] mb-4">Kurdistan Digital HealthNet</div>
           <LogoLoop
             logos={[
               { src: "/kdhn.png", alt: "KDHN" },
               { src: "/kdhn.png", alt: "KDHN" },
               { src: "/kdhn.png", alt: "KDHN" },
               { src: "/kdhn.png", alt: "KDHN" },
             ]}
             speed={40}
             direction="left"
             logoHeight={48}
             gap={40}
             pauseOnHover
             scaleOnHover
             fadeOut
             fadeOutColor="#0b0b0b"
             ariaLabel="kdhn"
           />
         </div>
       </div>
     </section>
   );
 }

