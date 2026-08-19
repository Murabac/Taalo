import { About, AboutDetails } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { ProcessIndustries } from "@/components/sections/ProcessIndustries";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="order-1">
        <Hero />
      </div>
      <div className="order-3 lg:order-2">
        <About />
      </div>
      <div className="order-2 lg:order-3">
        <Services />
      </div>
      <div className="order-4">
        <ProcessIndustries />
      </div>
      <div className="order-5">
        <AboutDetails />
      </div>
      <div className="order-6">
        <Founder />
      </div>
    </main>
  );
}
