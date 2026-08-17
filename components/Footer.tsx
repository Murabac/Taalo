import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  footerServices,
  navLinks,
  site,
  socials,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { socialIcons } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-navy text-white">
      <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_auto_1.1fr_1.1fr] lg:items-start lg:justify-between lg:px-5">
        <div className="space-y-5">
          <a href="#home" className="inline-flex flex-col items-center leading-none">
            <span className="font-heading text-[1.7rem] font-extrabold tracking-[0.18em] text-white">
              TA<span className="text-gold">A</span>LO
            </span>
            <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.14em] text-white">
              Marketing Company
            </span>
          </a>
          <p className="text-sm leading-relaxed text-white/90">
            We help brands and organizations tell their stories with creativity,
            strategy and impact.
          </p>
          <div className="flex gap-4">
            {socials.map((item) => {
              const Icon = socialIcons[item.name];
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-colors hover:text-gold"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 sm:col-span-2 lg:col-span-1 lg:flex lg:gap-10">
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="hover:text-gold"
                >
                  {link.label === "About" ? "About Us" : link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm text-white">
            {footerServices.map((item) => (
              <li key={item}>
                <a href="#services" className="hover:text-gold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-white" />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-white" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-white" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-white">
            Get In Touch
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-white">
            Let&apos;s build something great together.
          </p>
          <Button
            href={site.whatsapp}
            external
            variant="outline"
            showArrow={false}
          >
            Send Us A Message
          </Button>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="flex w-full flex-col gap-3 px-4 py-5 text-sm text-white sm:flex-row sm:items-center sm:justify-between lg:px-5">
          <p>© 2025 {site.name}. All Rights Reserved.</p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
