import React from 'react';

interface TitleSectionProps {
  titleTop: string;
  titleBottom: string;
  description: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ titleTop, titleBottom, description }) => {
    return (
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span> {titleTop} </span>
            <br className="hidden lg:block" />
            {titleBottom}
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            {description}
          </p>
        </div>
      </div>
    );
};

export default TitleSection;