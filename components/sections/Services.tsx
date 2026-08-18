import {
  Camera,
  Clapperboard,
  Globe,
  Landmark,
  Megaphone,
  MessagesSquare,
  Monitor,
  Pencil,
  PenTool,
  Smartphone,
  Video,
  Volume2,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  PenTool,
  Megaphone,
  Monitor,
  Smartphone,
  Video,
  Clapperboard,
  Camera,
  Pencil,
  MessagesSquare,
  Volume2,
  Landmark,
  Globe,
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-wash pb-20 sm:pb-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionHeading
            label="Our Services"
            title={
              <>
                Creative Solutions For <span className="text-gold">Every Need</span>
              </>
            }
            className="flex flex-col items-center"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="rounded-md bg-white p-6 text-center shadow-[0_8px_24px_rgba(10,17,40,0.06)]"
              >
                <Icon className="mx-auto mb-4 size-8 stroke-[1.3] text-navy" />
                <h3 className="mb-2 text-sm font-bold text-navy">{service.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted">{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
