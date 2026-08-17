import { Quote, Share2, Shield, Sun } from "lucide-react";
import Image from "next/image";
import { photos, site, values } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const valueIcons = [Shield, Sun, Share2];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-wash pb-20 sm:pb-24">
      <div className="grid w-full items-stretch gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:gap-10">
        <div className="flex flex-col justify-center px-4 lg:pl-5 lg:pr-0">
          <SectionHeading
            label="About Taalo"
            title={
              <>
                We Help You Communicate Your Ideas With{" "}
                <span className="text-gold">Impact.</span>
              </>
            }
          />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
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

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:min-h-[560px]">
        <div className="relative min-h-[420px] h-full overflow-hidden lg:min-h-0">
          <Image
            src={photos.building}
            alt="Taalo Marketing Company office"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </div>

        <div className="flex flex-col lg:min-h-0">
          <div className="relative min-h-[280px] flex-1 overflow-hidden">
            <Image
              src={photos.founderPortrait}
              alt={`${site.founder}, ${site.title}`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 22vw, 100vw"
            />
          </div>
          <div className="bg-navy px-6 py-7">
            <Quote className="mb-4 size-8 fill-gold text-gold" />
            <p className="text-lg font-bold text-white">{site.founder}</p>
            <p className="mt-1 text-sm text-white/60">{site.title}</p>
            <p className="mt-6 font-signature text-3xl text-gold">
              {site.founderShort}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
