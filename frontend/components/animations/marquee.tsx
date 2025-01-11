"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Marquee() {
  const scope = useRef(null);
  const textContainer = useRef(null);
  useGSAP(
    () => {
      gsap.to(textContainer.current, {
        x: "-100%",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top +90%",
          end: "bottom -90%",
          scrub: 1.5,
        },
      });
    },
    { scope: scope }
  );

  return (
    <div ref={scope} className="py-16">
      <div ref={textContainer} className="whitespace-nowrap translate-x-[80%]">
        <h2 className="text-[calc(40px+110*(100vw-576px)/1024)] font-semibold ">
          Elevate your digital presence
        </h2>
      </div>
    </div>
  );
}

export default Marquee;
