import { Play } from "lucide-react";
import Image from "next/image";
import { photos, socials, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { socialIcons } from "@/components/icons/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src={photos.hero}
        alt="Taalo Marketing Company office"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0b1326]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1326]/80 via-[#0b1326]/45 to-[#0b1326]/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:px-10 lg:py-40 lg:pr-24">
        <h1 className="max-w-3xl font-heading text-[2.35rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
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
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href={site.whatsapp} external className="px-7 py-3.5">
            Start Your Project
          </Button>
          <Button href={site.whatsapp} external variant="outline" className="px-7 py-3.5">
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
