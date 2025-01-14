"use client";

import { useGSAP } from "@gsap/react";
import HeroSwapper from "../animations/hero-swapper";
import SlideInOut from "../animations/slider-in-out";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useInView from "@/hooks/use-in-view";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView({
    threshold: 0.5,
    targetSelector: ref,
  });

  useGSAP(
    () => {
      if (isInView) {
        const tl = gsap.timeline();
        tl.to(".animate-text", {
          y: "0%",
          rotate: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
        tl.to(".rest-of-hero", {
          opacity: 1,
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }
    },
    { scope: ref, dependencies: [isInView] }
  );

  return (
    <section ref={ref} className="px-container">
      <h1 className="text-[7.4rem] pt-32 font-semibold leading-[1.1] overflow-hidden">
        <span className="flex flex-col items-baseline">
          <span className="overflow-hidden flex gap-5">
            <span className="animate-text rotate-6 translate-y-full opacity-0 inline-block">
              Crafting
            </span>
            <span className="animate-text rotate-6 translate-y-full opacity-0 pb-2 animate-gradient-text gradient-movement-clip bg-clip-text text-transparent inline-block">
              Digital
            </span>
          </span>
          <div className="overflow-hidden">
            <span className="animate-text rotate-6 translate-y-full opacity-0 inline-block">
              Experiences
            </span>
          </div>
        </span>
      </h1>
      <div className="rest-of-hero opacity-0 pt-32 flex justify-between w-full items-center">
        <HeroSwapper />
        <div className="flex gap-10 items-center">
          <div>
            <p className="text-2xl max-w-96">
              We build engaging websites, brands & innovative e-commerce
              solutions.
            </p>
          </div>
          <div>
            <SlideInOut
              label="Case Studies"
              variant={"primary"}
              size={"lg"}
              className="transition-transform hover:scale-105 ease-in-out duration-300 text-2xl text-white rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
