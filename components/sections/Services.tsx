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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="flex items-center gap-4 rounded-lg border border-navy bg-white p-4 shadow-[0_8px_20px_rgba(10,17,40,0.08)] lg:flex-col lg:rounded-md lg:border-[3px] lg:p-6 lg:text-center lg:shadow-none"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-navy lg:mx-auto lg:mb-4 lg:rounded-full">
                  <Icon className="size-7 stroke-[1.6] text-gold lg:text-white" />
                </span>
                <div className="min-w-0 text-left lg:text-center">
                  <h3 className="text-sm font-bold text-navy">{service.title}</h3>
                  <span className="mt-1.5 mb-2 block h-px w-8 bg-gold lg:mx-auto lg:hidden" />
                  <p className="text-[13px] leading-relaxed text-muted lg:mt-2">
                    {service.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
