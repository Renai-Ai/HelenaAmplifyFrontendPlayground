import React from "react";
import { FeatureCard } from "./FeatureCard";
import { SmallFeatureCard } from "./SmallFeatureCard";

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center px-32 py-16 max-md:px-16 max-sm:px-5"
    >
      <div className="flex flex-col gap-3.5 items-center mb-16 text-center">
        <h2 className="text-lg font-bold text-orange-400">Features</h2>
        <h3 className="text-5xl font-bold leading-10 text-white max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          Key Features of Our Platform
        </h3>
        <p className="text-2xl leading-8 text-neutral-200 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-6">
          Discover our cutting-edge AI-powered solutions.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <FeatureCard
          title="Website and Topic Monitoring"
          description="Easily monitor specified websites and search topics in real-time with flexible tracking options. Whether you need updates every few minutes or on a monthly basis, this feature ensures you stay informed."
          imageSrc="https://placehold.co/552x313/444444/444444"
          imageAlt="Website Monitoring"
          glowEffect={true}
        />

        <div className="flex gap-10 max-md:flex-col">
          <SmallFeatureCard
            title="API and Integration"
            description="A developer-friendly API for seamless integration, enabling programmatic control of monitoring agents in Python or JavaScript. Use your own API keys for various LLMs and notifications platforms, or use our keys."
            glowPosition="left"
          />

          <SmallFeatureCard
            title="Web-based Platform"
            description="We support natural language statement to create agent as well as comprehensive no code monitoring platform with budgeting for tracking agent results."
            glowPosition="right"
          />
        </div>
      </div>
    </section>
  );
};
