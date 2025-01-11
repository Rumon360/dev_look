import React from "react";
import BBCIcon from "../ui/bbc-icon";
import BMWIcon from "../ui/bmw-icon";
import CostaIcon from "../ui/costa-icon";
import { cn } from "@/lib/utils";
import ParallaxImage from "../animations/parallax-image";
import LogoSwapper from "../animations/logo-swapper";
import AnimateInWrapper from "../animations/animate-in-wrapper";
import LineSlideIn from "../animations/line-slide-in";
import AboutInfoCard from "../ui/about-info-card";
import TextAnimationWrapper from "../animations/text-wrapper";

const icons = [
  { id: 1, icon: <BBCIcon /> },
  { id: 2, icon: <BMWIcon /> },
  { id: 3, icon: <CostaIcon /> },
];

function About() {
  return (
    <section className="px-container py-32">
      <div className="grid grid-cols-2 items-end w-full h-full">
        <div>
          <h1 className="text-[3.375rem] font-semibold">
            <TextAnimationWrapper text="Your Digital Partner" />
          </h1>
          <LineSlideIn
            element="p"
            containerClass="max-w-[36.375rem] pt-6"
            className="text-[1.469rem]"
            lines={[
              "We partner with companies of all sizes to solve",
              "complex business challenges and define their digital",
              "strategies and objectives that deliver results. We",
              "help bring ideas to life and create brands, websites &",
              "digital products that work.",
            ]}
          />
          <AnimateInWrapper delay={0.5}>
            <div className="pt-24 flex items-center gap-6">
              <div className="flex items-center -space-x-8">
                {icons.map((icon) => (
                  <div
                    key={icon.id}
                    className={cn(
                      "w-[4.375rem] h-[4.375rem] flex justify-center items-center bg-black rounded-full",
                      {
                        "bg-gray-500": icon.id === 2,
                      }
                    )}
                  >
                    {icon.icon}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-[1.469rem]">
                Brands who&apos;ve trusted us...
              </p>
            </div>
          </AnimateInWrapper>
        </div>
        <AboutInfoCard />
      </div>
      <div className="w-full relative h-full">
        <ParallaxImage />
        <div className="text-[3.375rem]  font-semibold max-w-[calc(100%-150px)]">
          <TextAnimationWrapper text="From ambitious startups to global companies, we partner with great businesses and industry leaders." />
        </div>
        <LogoSwapper />
      </div>
    </section>
  );
}

export default About;
