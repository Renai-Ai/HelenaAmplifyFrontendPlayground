'use client'
const Main = () => {
  return (
    <section className="text-black body-font lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Generative AI </span>
            <br className="hidden lg:block" />
            for CAD Shapes
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            This is a demonstration project for Engineering Design using Generative AI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;