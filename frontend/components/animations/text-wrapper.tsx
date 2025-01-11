"use client";

import useInView from "@/hooks/use-in-view";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

type Props = {
  text: string;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function TextAnimationWrapper({ text }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView({
    threshold: 0.5,
    targetSelector: ref,
  });
  const wordsMap = text.split(" ");

  useGSAP(
    () => {
      if (isInView) {
        gsap.to(".word", {
          y: "0%",
          opacity: 1,
          rotate: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }
    },
    {
      scope: ref,
      dependencies: [isInView],
    }
  );

  return (
    <span
      ref={ref}
      className="flex items-center gap-x-2 overflow-hidden flex-wrap"
    >
      {wordsMap.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span className="word rotate-6 opacity-0 inline-block translate-y-full">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default TextAnimationWrapper;
