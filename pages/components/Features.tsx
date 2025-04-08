import React from "react";
import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <span className="text-orange-400 text-sm uppercase tracking-wider block text-center">
          Features
        </span>
        <h2 className="text-4xl font-bold text-center mt-4 mb-4">
          Key Features of Our Platform
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Discover our cutting-edge AI-powered solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 col-span-3">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/monitoring-devices.png"
                  alt="Website Monitoring"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  Website and Topic Monitoring
                </h3>
                <p className="text-gray-400">
                  Easily monitor specified websites and search topics in
                  real-time with flexible tracking options.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/api-icon.png"
                alt="API Integration"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold">API and Integration</h3>
              <p className="text-gray-400">
                A developer-friendly API for seamless integration in Python or
                JavaScript.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/web-platform.png"
                alt="Web Platform"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold">Web-based Platform</h3>
              <p className="text-gray-400">
                Natural language statement support and no-code monitoring
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
