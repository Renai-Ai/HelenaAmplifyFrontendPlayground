"use client";
import React from "react";
import { Header } from "../components/home/Header";
import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Features";
// import { Team } from "../components/home/Team";
// import { About } from "../components/home/About";
// import { Footer } from "../components/home/Footer";
import { BackgroundEffects } from "../components/home/BackgroundEffects";
import "@/styles/globals.css";

export const DeepTLDRLanding: React.FC = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Roboto:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Hero />
      {/*  */}
      {/* <Footer /> */}
    </div>
  );
};

export default DeepTLDRLanding;
