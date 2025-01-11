"use client";

import { useGSAP } from "@gsap/react";
import ImageComponent from "./image-component";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerEffect(ScrollTrigger);

function ParallaxImage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative h-[48.063rem] rounded-3xl overflow-hidden my-28"
    >
      <div
        ref={imageRef}
        className="h-[100%] scale-110 w-full absolute top-0 left-0 overflow-hidden rounded-3xl"
      >
        <ImageComponent
          src="https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/AW_Team_01-2200x1650.jpg"
          alt="About Image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default ParallaxImage;
