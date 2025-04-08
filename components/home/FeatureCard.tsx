import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  glowEffect?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  glowEffect = false,
}) => {
  return (
    <article className="flex gap-20 items-center p-14 rounded-lg border bg-stone-950 border-orange-400 border-opacity-10 max-md:flex-col max-md:p-10 max-sm:p-6">
      <div className="relative flex-1">
        {glowEffect && (
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;338:1077&quot; width=&quot;579&quot; height=&quot;579&quot; viewBox=&quot;0 0 579 579&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;absolute left-[132px] top-[96px] w-[269px] h-[269px]&quot;> <g filter=&quot;url(#filter0_f_338_1077)&quot;> <circle cx=&quot;289.5&quot; cy=&quot;289.5&quot; r=&quot;134.5&quot; fill=&quot;#F88E32&quot;></circle> </g> <defs> <filter id=&quot;filter0_f_338_1077&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;579&quot; height=&quot;579&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;shape&quot;></feBlend> <feGaussianBlur stdDeviation=&quot;77.5&quot; result=&quot;effect1_foregroundBlur_338_1077&quot;></feGaussianBlur> </filter> </defs> </svg>",
              }}
            />
          </div>
        )}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="relative w-[552px] h-[313px] max-lg:w-full"
        />
      </div>
      <div className="flex flex-col gap-8 max-w-[463px]">
        <h4 className="text-3xl font-bold leading-10 text-neutral-200 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8">
          {title}
        </h4>
        <p className="text-xl leading-7 text-neutral-200 max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};
