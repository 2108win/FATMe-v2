import Blog from "@/components/(homePage)/blog/Blog";
import Brand from "@/components/(homePage)/brand/Brand";
import Creator from "@/components/(homePage)/creator/Creator";
import GetInTouch from "@/components/(homePage)/get-in-touch/GetInTouch";
import Hero from "@/components/(homePage)/hero/Hero";
import Reviews from "@/components/(homePage)/reviews/Reviews";
import WhatWeDo from "@/components/(homePage)/what-we-do/WhatWeDo";
import WhoWantWhat from "@/components/(homePage)/who-want-what/WhoWantWhat";

export default function Home() {
  return (
    <>
      <div className="min-h-screen space-y-16">
        <Hero />
        <Brand />
        <WhatWeDo />
        <WhoWantWhat />
        <Creator />
        <Reviews />
        {/* Blog list */}
        <Blog />
        <GetInTouch />
      </div>
    </>
  );
}
