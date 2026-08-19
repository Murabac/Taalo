import {
  Clapperboard,
  Globe,
  Landmark,
  Megaphone,
  MessagesSquare,
  Monitor,
  Smartphone,
  Video,
  Vote,
  Volume2,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Megaphone,
  Clapperboard,
  Video,
  MessagesSquare,
  Monitor,
  Smartphone,
  Volume2,
  Landmark,
  Vote,
  Globe,
];

export function Services() {
  return (
    <section
      id="services"
      className="relative z-20 scroll-mt-24 rounded-t-[2.25rem] bg-wash px-0 pb-16 pt-12 sm:pb-24 sm:pt-16 lg:rounded-none lg:pt-0"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="rounded-md border-[3px] border-navy bg-white p-6 text-center"
              >
                <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-navy">
                  <Icon className="size-7 stroke-[1.5] text-white" />
                </span>
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
