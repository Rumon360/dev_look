"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutInfoCard() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const element = ref.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true,
        },
      });
      tl.to(element, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        delay: 0.2,
        ease: "cubic-bezier(0.25, 0, 0.25, 1)",
      }).to(".info-card-container", {
        opacity: 1,
        duration: 0.3,
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      className="bg-[#ECF1F4] p-[3.875rem] text-center text-[1.469rem] w-full h-[19.25rem] rounded-3xl"
    >
      <div className="info-card-container opacity-0 flex w-full h-full">
        <div className="flex flex-col justify-center items-center border-r-[1px] border-gray-300 h-full w-1/2">
          <p className="text-[3.375rem] font-semibold">20</p>
          <p>Years on the market</p>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/2">
          <p className="text-[3.375rem] font-semibold">20</p>
          <p>Years on the market</p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfoCard;
