"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkVeil from "@/components/DarkVeil";
import MetallicPaint, { parseLogoImage } from "@/components/MetallicPaint";
import Shuffle from "@/components/Shuffle";

export default function Hero() {
  // TypeScript helper: cast JS component to a generic component to satisfy TSX
  const [mpImageData, setMpImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadHeroLogo() {
      try {
        const response = await fetch("/kdhn.png");
        const blob = await response.blob();
        const file = new File([blob], "kdhn.png", { type: blob.type || "image/png" });
        const parsed = await parseLogoImage(file);
        setMpImageData(parsed?.imageData ?? null);
      } catch (err) {
        console.error("Error loading hero metallic logo:", err);
      }
    }
    loadHeroLogo();
  }, []);
  return (
    <section className="relative overflow-hidden py-8 md:py-10 min-h-[100svh] sm:min-h-screen flex flex-col justify-center items-center" style={{ width: "100%" }}>
      {/* Background effect - full bleed (DarkVeil) */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={10}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={3}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      <div className="container-px mx-auto max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <div className="mt-[15px] inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-[--color-border] text-[--color-muted-foreground]">
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand)" }} />
            Kurdistan Digital HealthNet
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            {"Innovating "}
            <Shuffle
              tag="span"
              text="Health"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              loopDelay={1.7}
              loop={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="inline-block uppercase relative top-[10px]"
              style={{ display: "inline-block", color: "#82c2ff" }}
            />
            {" Enhancing "}
            <Shuffle
              tag="span"
              text="Care"
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
              style={{ display: "inline-block", color: "#82c2ff" }}
            />
          </h1>
          <p className="mt-5 text-base md:text-lg prose-muted max-w-[55ch]">
We build digital solutions that help people stay informed, supported, and healthy every day.
</p><div className="mt-8 flex flex-col sm:flex-row gap-3">
            
            <a
              href="https://kdhn-demo.online/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-[--color-foreground] bg-white/10 border border-white/10 backdrop-blur-md hover:border-[#ccffe6] transition-colors"
            >
              See our work
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-[--color-foreground] bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#ccffe6] transition-colors"
            >
              contact us
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="w-full flex items-center justify-center select-none">
            <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] mt-8 sm:mt-4 md:mt-0">
              <img
                src="/kdhn.png"
                alt="KDHN logo"
                className="w-full h-full object-contain"
                loading="eager"
                draggable={false}
              />
              {mpImageData && (
                <div className="absolute inset-0 pointer-events-none">
                  <MetallicPaint
                    imageData={mpImageData}
                    params={{ edge: 0.1, patternBlur: 0.00021, patternScale: 3, refraction: 0.030010, speed: 0.4, liquid: 0.217 }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

