'use client'

import TitleSection from "./TitleSection";

const Main = () => {
  return (
    <section className="text-black body-font lg:pt-20">
        <TitleSection 
            titleTop="Generative AI" 
            titleBottom="for CAD Shapes" 
            description="This is a demonstration project for Engineering Design using Generative AI." />
    </section>
  );
}

export default Main;