import { MapPin, Quote, Share2, Shield, Sun } from "lucide-react";
import Image from "next/image";
import { photos, site, values } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const valueIcons = [Shield, Sun, Share2];

function AboutCopy() {
  return (
    <div className="flex flex-col justify-center px-5 py-10 lg:px-8 lg:py-16">
      <SectionHeading
        label="About Taalo"
        title={
          <>
            We Help You Communicate Your Ideas With{" "}
            <span className="text-gold">Impact.</span>
          </>
        }
      />
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
        Taalo Marketing Company exists to turn ideas into stories people
        remember. We combine strategy, design, and production so your
        message lands with purpose — whether you are a government office,
        an NGO, or a growing brand.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {values.map((item, index) => {
          const Icon = valueIcons[index];
          return (
            <div key={item.title}>
              <Icon className="mb-3 size-7 stroke-[1.5] text-gold" />
              <h3 className="mb-2 text-sm font-bold text-navy">{item.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted">{item.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Button href={site.whatsapp} external variant="navy">
          More About Us
        </Button>
      </div>
    </div>
  );
}

function AboutVisuals() {
  return (
    <>
      <div className="flex flex-col justify-center bg-navy px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-16">
        <Quote className="mb-6 size-10 fill-gold text-gold" />
        <p className="font-heading text-2xl font-bold leading-snug lg:text-3xl">
          A great brand is not only seen.{" "}
          <span className="text-gold">It is understood.</span>
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/70">
          From Hargeisa, we help institutions and brands say who they are
          with clarity — through branding, digital, film, and public
          communication.
        </p>
        <div className="mt-10 flex items-start gap-3 border-t border-white/15 pt-6">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Based in
            </p>
            <p className="mt-1 text-sm">{site.address}</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-[360px] flex-col sm:min-h-[420px] lg:min-h-[560px]">
        <div className="relative min-h-[240px] flex-1 sm:min-h-[280px]">
          <Image
            src={photos.founderPortrait}
            alt={`${site.founder}, ${site.title}`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
        </div>
        <div className="bg-navy px-6 py-7">
          <p className="text-lg font-bold text-white">{site.founder}</p>
          <p className="mt-1 text-sm text-white/60">{site.title}</p>
          <p className="mt-5 font-signature text-3xl text-gold">
            {site.founderShort}
          </p>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <section id="about" className="relative z-20 scroll-mt-24 bg-wash">
      <div className="grid w-full items-stretch gap-0 lg:grid-cols-[1.15fr_0.95fr_0.85fr]">
        <div className="hidden lg:contents">
          <AboutCopy />
        </div>
        <AboutVisuals />
      </div>
    </section>
  );
}

export function AboutDetails() {
  return (
    <section className="scroll-mt-24 bg-wash lg:hidden">
      <AboutCopy />
    </section>
  );
}
