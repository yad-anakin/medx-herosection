"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkVeil from "@/components/DarkVeil";
import LogoLoop from "@/components/LogoLoop";
import MetallicPaint, { parseLogoImage } from "@/components/MetallicPaint";
import Shuffle from "@/components/Shuffle";

export default function Hero() {
  // TypeScript helper: cast JS component to a generic component to satisfy TSX
  const LogoLoopAny = LogoLoop as unknown as React.ComponentType<any>;
  const [mpImageData, setMpImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadHeroLogo() {
      try {
        const response = await fetch("/medx-logo.svg");
        const blob = await response.blob();
        const file = new File([blob], "medx-logo.svg", { type: blob.type || "image/svg+xml" });
        const parsed = await parseLogoImage(file);
        setMpImageData(parsed?.imageData ?? null);
      } catch (err) {
        console.error("Error loading hero metallic logo:", err);
      }
    }
    loadHeroLogo();
  }, []);
  // Use SVGs from public/logos/
  const imageLogos = [
    { src: "/medx.png", alt: "MedX" },
    { src: "/medx-logo.svg", alt: "MedX" },
    { src: "/medx.png", alt: "MedX" },
    { src: "/medx-logo.svg", alt: "MedX" }
  ];
  return (
    <section className="relative overflow-hidden py-8 md:py-10 min-h-[100svh] sm:min-h-screen flex flex-col justify-center items-center" style={{ width: "100%" }}>
      {/* Background effect - full bleed (DarkVeil) */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={60}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      <div className="container-px mx-auto max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <div className="mt-[15px] inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-[--color-border] text-[--color-muted-foreground]">
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
            Full-service digital agency
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            {"Where bold "}
            <Shuffle
              tag="span"
              text="IDEAS"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              loopDelay={1}
              loop={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="inline-block uppercase relative top-[10px]"
              style={{ display: "inline-block", color: "#00ff64" }}
            />
            {" meet real "}
            <Shuffle
              tag="span"
              text="RESULTS"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              loopDelay={1}
              loop={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="inline-block uppercase relative top-[10px]"
              style={{ display: "inline-block", color: "#00ff64" }}
            />
          </h1>
          <p className="mt-5 text-base md:text-lg prose-muted max-w-[55ch]">
          We create work that resonates. Building brands people remember and experiences they return to.          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-[--color-foreground] bg-white/10 border border-white/10 backdrop-blur-md hover:border-[#ccffe6] transition-colors"
            >
              Start a project
            </Link>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-[--color-foreground] bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#ccffe6] transition-colors"
            >
              See our work
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="w-full flex items-center justify-center select-none">
            <div className="relative w-full max-w-[140px] sm:max-w-[200px] md:max-w-[300px] aspect-square">
              <img
                src="/medx-logo.svg"
                alt="MedX logo"
                className="w-full h-full object-contain"
                loading="eager"
                draggable={false}
              />
              {mpImageData && (
                <div className="absolute inset-0 pointer-events-none">
                  <MetallicPaint
                    imageData={mpImageData}
                    params={{ edge: 0.2, patternBlur: 0.005, patternScale: 2, refraction: 0.020000, speed: 0.6, liquid: 0.17 }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Logo loop under the hero content */}
      <div className="relative z-10 mt-6">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center text-xs uppercase tracking-wide text-[--color-muted-foreground] mb-4">Trusted by</div>
          <LogoLoopAny
            logos={imageLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0b0b0b"
            ariaLabel="Our partners"
          />
        </div>
      </div>
    </section>
  );
}

