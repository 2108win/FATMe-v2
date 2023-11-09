import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";

export default function Home() {
  return (
    <>
      <div className="h-[2000px]">
        <Hero />
        <WhatWeDo />
      </div>
    </>
  );
}
