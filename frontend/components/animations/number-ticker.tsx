"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

interface NumberTickerProps {
  start: number;
  end: number;
  duration?: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  start,
  end,
  duration = 2,
}) => {
  const numberRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useGSAP(
    () => {
      if (!numberRef.current) return;
      ScrollTrigger.create({
        trigger: numberRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!hasAnimated) {
            setHasAnimated(true);
            gsap.fromTo(
              numberRef.current!,
              {
                innerText: start,
              },
              {
                innerText: end,
                duration: duration,
                snap: { innerText: 1 },
                ease: "power1.out",
                onUpdate: () => {
                  if (numberRef.current) {
                    numberRef.current.innerText = Math.round(
                      parseFloat(numberRef.current.innerText)
                    ).toString();
                  }
                },
              }
            );
          }
        },

        once: true,
      });
    },
    { scope: numberRef, dependencies: [start, end, duration, hasAnimated] }
  );

  return (
    <div
      ref={numberRef}
      className="text-[3.375rem] font-semibold h-[4.75rem]"
    ></div>
  );
};

export default NumberTicker;
