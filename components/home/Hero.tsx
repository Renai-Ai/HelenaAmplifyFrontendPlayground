import React from "react";
// import heroVideo from "@/assets/heroanimation/hero.mp4";
export const Hero: React.FC = () => {
  return (
    <section className="relative h-[630px] max-md:h-auto max-sm:h-auto">
      <div className="flex justify-between items-center px-32 py-24 max-md:flex-col max-md:gap-10 max-md:px-16 max-sm:px-5">
        <div className="flex flex-col gap-6 max-w-[561px]">
          <h1 className="text-6xl font-bold tracking-tighter bg-[clip-text] leading-[68px] max-md:text-5xl max-md:leading-[52px] max-sm:text-4xl max-sm:leading-10 text-white">
            AI-Powered Research at Your Fingertips
          </h1>
          <p className="text-2xl leading-8 text-neutral-200 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-6">
            Built for developers, individual, and teams, DeepTLDR automates
            content monitoring and summarization with powerful APIs, flexible
            triggers, and smart notifications.
          </p>
        </div>
        <div className="h-[429px] w-[662px] max-md:w-full max-md:h-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover z-50"
          >
            <source src="/animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
