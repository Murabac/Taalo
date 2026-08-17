import { Rocket } from "lucide-react";
import Image from "next/image";
import { photos, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Founder() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-3">
        <div className="flex items-center justify-center overflow-hidden bg-wash">
          <Image
            src={photos.founderDesk}
            alt={`${site.founder} at work`}
            width={1600}
            height={1067}
            className="h-full w-auto max-w-none"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-center bg-white px-8 py-12 sm:px-10">
          <SectionHeading
            label="Founder Message"
            title="Our Commitment To You"
          />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Taalo was founded with one mission: to help organizations
            communicate their ideas with creativity, professionalism, and
            impact. We believe every story deserves to be seen and remembered.
            We are here to make that happen.
          </p>
          <p className="mt-8 font-signature text-4xl text-gold">
            {site.founderShort}
          </p>
          <p className="mt-3 text-sm font-bold text-navy">{site.founder}</p>
          <p className="mt-0.5 text-sm text-muted">{site.title}</p>
        </div>

        <div className="flex flex-col justify-center bg-navy px-8 py-12 sm:px-10">
          <Rocket className="mb-5 size-10 stroke-[1.5] text-gold" />
          <h2 className="text-3xl font-bold leading-tight text-white">
            Ready To Start Your Project?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            We are ready to bring your ideas to life. Let&apos;s create something
            amazing together.
          </p>
          <div className="mt-8">
            <Button href={site.whatsapp} external>
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
