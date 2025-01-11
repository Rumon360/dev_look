import React from "react";
import Marquee from "../animations/marquee";
import { cn } from "@/lib/utils";
import LineSlideIn from "../animations/line-slide-in";
import NumberTicker from "../animations/number-ticker";
import TextAnimationWrapper from "../animations/text-wrapper";

function Info() {
  return (
    <section>
      <Marquee />
      <div className="px-container py-[7.25rem] overflow-hidden">
        <h3 className="text-[3.375rem] font-semibold max-w-2xl">
          <TextAnimationWrapper text="Let our experienced team elevate your digital goals" />
        </h3>
        <div className="flex items-end text-[1.469rem] pt-20">
          <div className="flex w-[50%] gap-10">
            <div>
              <NumberTicker start={0} end={250} duration={0.5} />
              <p>Five-Star Reviews</p>
            </div>
            <div>
              <NumberTicker start={0} end={10} duration={0.5} />
              <p>In-House Experts</p>
            </div>
          </div>
          <div className="w-[50%] pl-32">
            <LineSlideIn
              element="p"
              className="text-[1.469rem]"
              lines={[
                " We have successfully completed over 300+",
                "projects from a variety of industries. In our team,",
                "designers work alongside developers and digital",
                "strategists, we believe this is our winning recipe",
                "for creating digital products that make an impact.",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full relative h-[38.313rem] overflow-hidden">
          <div className="absolute h-full w-full grid grid-cols-2 justify-between top-0 left-0">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: "url(/bg.svg)",
                  backgroundPosition: "100%",
                }}
                className={cn(
                  "h-full relative bg-cover bg-no-repeat before:absolute before:w-[50%] before:h-full before:top-0",
                  {
                    "before:left-0 before:[background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))]":
                      index === 0,
                  },
                  {
                    "before:right-0 before:[background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff)]":
                      index === 1,
                  }
                )}
              ></div>
            ))}
          </div>
          <div className="absolute leading-[1.1] h-full w-full flex justify-center items-center text-[5.43rem] font-semibold">
            <div className="max-w-[40rem] w-full mx-auto">
              <h2>
                <LineSlideIn
                  element="span"
                  className="block"
                  lines={["Crafting digital"]}
                />
                <LineSlideIn
                  element="span"
                  className="block text-right text-gradient"
                  delay={0.1}
                  lines={["experiences"]}
                />
                <LineSlideIn
                  element="span"
                  className="block"
                  delay={0.2}
                  lines={["since 2004"]}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
