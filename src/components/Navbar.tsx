"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <header className="container-px fixed top-[15px] left-[15px] right-[15px] z-40 rounded-2xl border-b border-white/10 bg-black/30 supports-[backdrop-filter]:bg-black/20 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.03)]">
      <div className="mx-auto max-w-6xl h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 text-[--color-foreground] transition-colors hover:text-[--brand] rounded-md -mx-1 px-1 hover:bg-white/5 hover:backdrop-blur-sm" onClick={close}>
          <img src="/kdhnb.png" alt="KDHN logo" className="h-12 transition duration-200 ease-out group-hover:scale-[1.04] group-hover:brightness-125 group-hover:drop-shadow-[0_0_18px_rgba(130,194,255,0.35)]" />
          <span className="tracking-tight font-semibold"></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a
            href="#idea"
            className="text-[--color-muted-foreground] hover:text-[--brand] transition-colors transition-transform hover:scale-105 border-b-2 border-transparent hover:border-[--brand] pb-0.5 rounded-md px-2 py-1 -mx-2 hover:bg-white/5 hover:backdrop-blur-sm"
          >
            Our idea
          </a>
          <a
            href="#work"
            className="text-[--color-muted-foreground] hover:text-[--brand] transition-colors transition-transform hover:scale-105 border-b-2 border-transparent hover:border-[--brand] pb-0.5 rounded-md px-2 py-1 -mx-2 hover:bg-white/5 hover:backdrop-blur-sm"
          >
            Our mission
          </a>
          <a
            href="#contact"
            className="text-[--color-muted-foreground] hover:text-[--brand] transition-colors transition-transform hover:scale-105 border-b-2 border-transparent hover:border-[--brand] pb-0.5 rounded-md px-2 py-1 -mx-2 hover:bg-white/5 hover:backdrop-blur-sm"
          >
            Contact us
          </a>
          <a
            href="https://kdhn-demo.online/"
            className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[--color-foreground] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            Test our solution
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={toggle}
          className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-[--color-foreground] hover:bg-white/10 border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel - full width under navbar (overlay, no layout shift) */}
      <div
        className={`sm:hidden absolute left-0 right-0 top-16 z-40 transition-all duration-200 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        } bg-black border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.03)] py-2`}
      >
        <div className="container-px mx-auto max-w-6xl pb-2">
          <nav className="mt-2 grid gap-1 text-sm">
            <a onClick={close} href="#idea" className="block rounded-md px-3 py-2 text-[--color-foreground] hover:text-[--brand] hover:bg-white/10 hover:backdrop-blur-sm transition-colors transition-transform hover:scale-105">
              Our idea
            </a>
            <a onClick={close} href="#work" className="block rounded-md px-3 py-2 text-[--color-foreground] hover:text-[--brand] hover:bg-white/10 hover:backdrop-blur-sm transition-colors transition-transform hover:scale-105">
              Our mission
            </a>
            <a onClick={close} href="#contact" className="block rounded-md px-3 py-2 text-[--color-foreground] hover:text-[--brand] hover:bg-white/10 hover:backdrop-blur-sm transition-colors transition-transform hover:scale-105">
              Contact us
            </a>
            <a
              onClick={close}
              href="https://kdhn-demo.online/"
              className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-[--color-foreground] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              Test our solution
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

