"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-32 py-5 max-md:px-16 max-sm:px-5">
      <div className="flex gap-2 items-center">
        {/* <Logo /> */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d708539469936ef1e5036ae5e525c7963848713d"
          alt="DeepTLDR"
          className="h-[20px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="flex gap-8 items-center max-sm:hidden">
        <div className="flex gap-8">
          <a
            href="#features"
            className="text-lg font-semibold text-neutral-200"
          >
            Features
          </a>
          <a href="#about" className="text-lg font-semibold text-neutral-200">
            About
          </a>
        </div>
        <button className="px-6 py-2.5 text-base font-semibold text-black rounded-3xl bg-[linear-gradient(105deg,#F88E32_10.05%,#FFC857_89.95%)]">
          Sign Up for Early Access
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="hidden max-sm:block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className="ti ti-menu-2 text-2xl text-neutral-200" />
      </button>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-5 text-neutral-200 text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="ti ti-x" />
          </button>
          <nav className="flex flex-col gap-8 items-center">
            <a
              href="#features"
              className="text-xl font-semibold text-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="text-xl font-semibold text-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <button className="mt-4 px-6 py-2.5 text-base font-semibold text-black rounded-3xl bg-[linear-gradient(105deg,#F88E32_10.05%,#FFC857_89.95%)]">
              Sign Up for Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
