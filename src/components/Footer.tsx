export default function Footer() {
  return (
    <footer className="container-px mx-auto max-w-6xl py-10 md:py-12 border-t border-[--color-border] mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[--color-muted-foreground]">
          © {new Date().getFullYear()} MedX Agency. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#services">Services</a>
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#work">Work</a>
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
