import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { ProcessIndustries } from "@/components/sections/ProcessIndustries";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ProcessIndustries />
      <Founder />
    </main>
  );
}
