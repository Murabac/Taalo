"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <a
          href="#home"
          className="inline-flex flex-col items-center justify-self-start leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-[1.7rem] font-extrabold tracking-[0.18em] text-white sm:text-[1.9rem]">
            TA<span className="text-gold">A</span>LO
          </span>
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.14em] text-white/90 sm:text-[9px]">
            Marketing Company
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={`relative text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-gold ${
                index === 0
                  ? "after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-7 after:-translate-x-1/2 after:bg-gold"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Button
            href={site.whatsapp}
            external
            variant="goldOutline"
            showArrow={false}
            className="hidden px-5 py-2.5 text-gold sm:inline-flex"
          >
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-navy px-5 py-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={site.whatsapp}
              external
              className="mt-2 w-fit"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
