import { Play } from "lucide-react";
import Image from "next/image";
import { photos, socials, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { socialIcons } from "@/components/icons/SocialIcons";

const bubbles = [
  { size: 18, left: "8%", top: "18%", delay: "0s", duration: "9s" },
  { size: 42, left: "18%", top: "62%", delay: "1.2s", duration: "11s" },
  { size: 28, left: "72%", top: "22%", delay: "0.6s", duration: "8s" },
  { size: 56, left: "78%", top: "58%", delay: "2s", duration: "13s" },
  { size: 14, left: "48%", top: "14%", delay: "1.8s", duration: "7s" },
  { size: 36, left: "6%", top: "78%", delay: "0.4s", duration: "10s" },
  { size: 22, left: "88%", top: "36%", delay: "2.4s", duration: "9s" },
  { size: 48, left: "38%", top: "72%", delay: "1s", duration: "12s" },
  { size: 12, left: "62%", top: "80%", delay: "3s", duration: "8s" },
  { size: 30, left: "28%", top: "32%", delay: "2.8s", duration: "10s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
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

      <div className="hero-bubbles md:hidden" aria-hidden>
        {bubbles.map((bubble, index) => (
          <span
            key={index}
            className="hero-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32 lg:px-10 lg:py-40 lg:pr-24">
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
