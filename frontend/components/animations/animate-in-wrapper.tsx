"use client";

import useInView from "@/hooks/use-in-view";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type AnimateInWrapperProps = {
  children: React.ReactNode;
  delay?: number;
  ease?: string;
};

gsap.registerPlugin(useGSAP);

function AnimateInWrapper({ children, delay, ease }: AnimateInWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView({
    threshold: 0.5,
    targetSelector: ref,
  });

  useGSAP(
    () => {
      if (isInView) {
        gsap.to(ref.current, {
          y: "0%",
          opacity: 1,
          duration: 0.3,
          delay: delay || 0,
          ease: ease || "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }
    },
    { scope: ref, dependencies: [isInView] }
  );

  return (
    <div ref={ref} className="translate-y-4 opacity-0">
      {children}
    </div>
  );
}

export default AnimateInWrapper;
