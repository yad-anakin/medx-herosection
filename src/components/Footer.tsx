export default function Footer() {
  return (
    <footer className="container-px mx-auto max-w-6xl py-10 md:py-12 border-t border-[--color-border] mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[--color-muted-foreground]">
          {new Date().getFullYear()} Kurdistan Digital HealthNet. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#idea">Our idea</a>
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#work">Our mission</a>
          <a className="hover:text-[--color-foreground] text-[--color-muted-foreground]" href="#contact">Contact us</a>
        </div>
      </div>
    </footer>
  );
}
