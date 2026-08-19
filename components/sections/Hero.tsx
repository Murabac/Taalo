import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { photos, site, socials } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { socialIcons } from "@/components/icons/SocialIcons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy md:flex md:min-h-[100svh] md:items-center">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={photos.hero}
          alt="Taalo Marketing Company office"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 767px) 1px, 100vw"
        />
        <div className="absolute inset-0 bg-[#0b1326]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1326]/80 via-[#0b1326]/45 to-[#0b1326]/20" />
      </div>

      <div className="relative overflow-hidden pb-8 pt-24 md:hidden">
        <div className="hero-dots" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[78%]">
          <Image
            src={photos.heroMobile}
            alt="Marketing analytics dashboard"
            fill
            priority
            className="object-cover object-[32%_48%] origin-right scale-[1.55]"
            sizes="80vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[42%] bg-gradient-to-r from-navy via-navy/70 to-transparent" />

        <div className="relative z-10 w-[62%] px-5">
          <h1 className="font-heading text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-white">
            Marketing That Makes People{" "}
            <span className="relative inline-block text-gold">
              Remember You.
              <svg
                className="hero-underline"
                viewBox="0 0 180 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8c28-6 58-6 88-4 28 2 56 3 88-3"
                  stroke="#D4A25F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-4 text-[12px] leading-5 text-white/80">
            We help businesses, governments, NGOs, and organizations build
            powerful brands through strategy, creative design, digital marketing,
            video production, and storytelling.
          </p>
          <div className="mt-6 flex flex-col items-start gap-4">
            <Button href={site.whatsapp} external className="rounded-lg px-5 py-3 text-[10px]">
              Start Your Project
            </Button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold"
            >
              View Our Work
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32 md:block lg:px-10 lg:py-40 lg:pr-24">
        <h1 className="max-w-3xl font-heading text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
          Every Great Brand
          <br />
          Starts With a Story.
          <br />
          <span className="text-gold">Let Us Tell Yours.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
          We are a full-service marketing company helping brands, institutions,
          and organizations communicate with clarity — through branding, digital
          marketing, documentaries, commercial video, and public communication.
        </p>
        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <Button href={site.whatsapp} external className="w-full px-7 py-3.5 sm:w-auto">
            Start Your Project
          </Button>
          <Button
            href={site.whatsapp}
            external
            variant="outline"
            className="w-full px-7 py-3.5 sm:w-auto"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 z-10 hidden h-[58vh] max-h-[420px] -translate-y-1/2 items-center gap-4 lg:flex xl:right-10">
        <span className="h-full w-px shrink-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
        <div className="flex flex-col items-center gap-5">
          {socials.map((item) => {
            const Icon = socialIcons[item.name];
            return (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                target="_blank"
                rel="noreferrer"
                className="flex size-8 items-center justify-center text-white transition-colors hover:text-gold"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white md:inline-flex xl:right-16"
      >
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-white">
          <Play className="ml-0.5 size-4 fill-white text-white" />
        </span>
        Watch Office Tour
      </a>
    </section>
  );
}
