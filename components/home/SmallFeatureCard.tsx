import React from "react";

interface SmallFeatureCardProps {
  title: string;
  description: string;
  glowPosition?: "left" | "right";
}

export const SmallFeatureCard: React.FC<SmallFeatureCardProps> = ({
  title,
  description,
  glowPosition = "left",
}) => {
  return (
    <article className="flex-1 p-10 rounded-lg border-2 bg-stone-950 border-orange-400 border-opacity-10 max-sm:p-6">
      <div>
        {glowPosition === "left" ? (
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;338:1089&quot; layer-name=&quot;image&quot; width=&quot;580&quot; height=&quot;340&quot; viewBox=&quot;0 0 580 340&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[580px] h-[340px] max-lg:w-full&quot;> <g filter=&quot;url(#filter0_f_338_1089)&quot;> <circle cx=&quot;27.5&quot; cy=&quot;169.5&quot; r=&quot;87.5&quot; fill=&quot;#F88E32&quot;></circle> </g> <defs> <filter id=&quot;filter0_f_338_1089&quot; x=&quot;-254.4&quot; y=&quot;-112.4&quot; width=&quot;563.8&quot; height=&quot;563.8&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;shape&quot;></feBlend> <feGaussianBlur stdDeviation=&quot;97.2&quot; result=&quot;effect1_foregroundBlur_338_1089&quot;></feGaussianBlur> </filter> </defs> </svg>",
            }}
          />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;338:1096&quot; layer-name=&quot;image container&quot; width=&quot;584&quot; height=&quot;344&quot; viewBox=&quot;0 0 584 344&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[580px] h-[340px] max-lg:w-full&quot;> <g clip-path=&quot;url(#clip0_338_1096)&quot;> <mask id=&quot;path-1-outside-1_338_1096&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;584&quot; height=&quot;344&quot; fill=&quot;black&quot;> <rect fill=&quot;white&quot; width=&quot;584&quot; height=&quot;344&quot;></rect> <path d=&quot;M2 10C2 5.58172 5.58172 2 10 2H574C578.418 2 582 5.58172 582 10V334C582 338.418 578.418 342 574 342H10C5.58173 342 2 338.418 2 334V10Z&quot;></path> </mask> <path d=&quot;M2 10C2 5.58172 5.58172 2 10 2H574C578.418 2 582 5.58172 582 10V334C582 338.418 578.418 342 574 342H10C5.58173 342 2 338.418 2 334V10Z&quot; fill=&quot;#100F0F&quot;></path> <g filter=&quot;url(#filter0_f_338_1096)&quot;> <circle cx=&quot;541.5&quot; cy=&quot;89.5&quot; r=&quot;87.5&quot; fill=&quot;#F88E32&quot;></circle> </g> </g> <path d=&quot;M10 4H574V0H10V4ZM580 10V334H584V10H580ZM574 340H10V344H574V340ZM4 334V10H0V334H4ZM10 340C6.68629 340 4 337.314 4 334H0C0 339.523 4.47716 344 10 344V340ZM580 334C580 337.314 577.314 340 574 340V344C579.523 344 584 339.523 584 334H580ZM574 4C577.314 4 580 6.68629 580 10H584C584 4.47715 579.523 0 574 0V4ZM10 0C4.47715 0 0 4.47715 0 10H4C4 6.68629 6.68629 4 10 4V0Z&quot; fill=&quot;#F88E32&quot; fill-opacity=&quot;0.15&quot; mask=&quot;url(#path-1-outside-1_338_1096)&quot;></path> <defs> <filter id=&quot;filter0_f_338_1096&quot; x=&quot;259.6&quot; y=&quot;-192.4&quot; width=&quot;563.8&quot; height=&quot;563.8&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;shape&quot;></feBlend> <feGaussianBlur stdDeviation=&quot;97.2&quot; result=&quot;effect1_foregroundBlur_338_1096&quot;></feGaussianBlur> </filter> <clipPath id=&quot;clip0_338_1096&quot;> <path d=&quot;M2 10C2 5.58172 5.58172 2 10 2H574C578.418 2 582 5.58172 582 10V334C582 338.418 578.418 342 574 342H10C5.58173 342 2 338.418 2 334V10Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
            }}
          />
        )}
      </div>
      <div className="mt-3">
        <h4 className="mb-2 text-3xl font-semibold leading-10 text-neutral-200 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8">
          {title}
        </h4>
        <p className="text-lg font-semibold leading-7 text-neutral-200 max-md:text-base max-md:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};
