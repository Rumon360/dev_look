"use client";

import useInView from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  lines: string[];
  className: string;
  containerClass?: string;
  delay?: number;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

gsap.registerPlugin(useGSAP);

function LineSlideIn({
  lines,
  className,
  element,
  delay = 0,
  containerClass,
}: Props) {
  const container = useRef(null);
  const isInView = useInView({
    threshold: 0.5,
    targetSelector: container,
  });
  const Element = element;

  useGSAP(
    () => {
      if (isInView) {
        gsap.to(".animate-text", {
          y: "0%",
          opacity: 1,
          duration: 0.3,
          stagger: 0.15,
          delay: delay,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }
    },
    { scope: container, dependencies: [isInView] }
  );

  return (
    <Element ref={container} className={cn("overflow-hidden", containerClass)}>
      {lines.map((line, index) => (
        <span
          key={index}
          className={cn(
            "animate-text translate-y-4 opacity-0 inline-block",
            className
          )}
        >
          {line}
        </span>
      ))}
    </Element>
  );
}

export default LineSlideIn;
