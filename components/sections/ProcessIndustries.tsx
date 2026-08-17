import {
  Bell,
  Briefcase,
  Building2,
  ChevronsLeftRight,
  CircleDollarSign,
  Cpu,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  Landmark,
  Lightbulb,
  Package,
  Rocket,
  ShoppingCart,
  Star,
} from "lucide-react";
import { industries, processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const processIcons = [
  Handshake,
  Lightbulb,
  FileText,
  Rocket,
  Package,
  HeartHandshake,
];

const industryIcons = [
  Landmark,
  HeartHandshake,
  Briefcase,
  Star,
  Heart,
  GraduationCap,
  Building2,
  ShoppingCart,
  Bell,
  Cpu,
  CircleDollarSign,
  ChevronsLeftRight,
];

export function ProcessIndustries() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 px-4 lg:grid-cols-[minmax(0,7fr)_1px_minmax(0,5fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:px-5">
        <div id="process" className="scroll-mt-24 lg:col-start-1 lg:row-start-1">
          <SectionHeading
            light
            label="Our Process"
            title="From Idea To Impact"
            className="flex flex-col items-center text-center"
          />
        </div>

        <div className="relative lg:col-start-1 lg:row-start-2 lg:self-center">
          <span
            aria-hidden
            className="absolute top-5 right-6 left-6 hidden border-t border-dashed border-white/45 lg:block"
          />
          <div className="flex flex-wrap justify-between gap-y-10 lg:flex-nowrap">
            {processSteps.map((item, index) => {
              const Icon = processIcons[index];

              return (
                <div
                  key={item.step}
                  className="relative w-[45%] text-center sm:w-[30%] lg:w-[7.25rem] lg:shrink-0"
                >
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-gold text-navy">
                    <Icon className="size-5 stroke-[2]" />
                  </div>
                  <p className="text-sm font-semibold text-white">{item.step}</p>
                  <h3 className="mt-1 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="hidden bg-white/20 lg:col-start-2 lg:row-span-2 lg:block"
          aria-hidden
        />

        <div
          id="industries"
          className="scroll-mt-24 lg:col-start-3 lg:row-start-1"
        >
          <SectionHeading
            light
            label="Industries We Serve"
            title="We Work With Purpose"
            className="flex flex-col items-center text-center"
          />
        </div>

        <div className="grid grid-cols-2 border-t border-l border-white/20 sm:grid-cols-3 lg:col-start-3 lg:row-start-2 lg:grid-cols-4">
          {industries.map((name, index) => {
            const Icon = industryIcons[index];
            return (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-2 border-r border-b border-white/20 px-2 py-5 text-center"
              >
                <Icon className="size-6 stroke-[1.4] text-gold" />
                <p className="text-xs font-medium text-white">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
