"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SWAP_INTERVAL = 3500;
const ANIMATION_DURATION = 0.5;

const swapperVariants = [
  { id: 1, label: "Years on the market", number: 20 },
  { id: 2, label: "Website Awards", number: 15 },
  { id: 3, label: "Satisfied Customers", number: 500 },
] as const;

const animationConfig = {
  duration: ANIMATION_DURATION,
  ease: "power2.out",
} as const;

export default function HeroSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const animateSwap = () => {
    const timeline = gsap.timeline();

    timeline
      .to([numberRef.current, labelRef.current], {
        ...animationConfig,
        y: "20%",
        opacity: 0,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % swapperVariants.length);
        },
      })
      .to([numberRef.current, labelRef.current], {
        ...animationConfig,
        y: "0%",
        opacity: 1,
      });
  };

  useEffect(() => {
    const intervalId = setInterval(animateSwap, SWAP_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  const currentVariant = swapperVariants[currentIndex];

  return (
    <div className="text-2xl flex items-center gap-6">
      <div className="bg-black overflow-hidden text-white flex justify-center items-center w-[4.375rem] h-[4.375rem] rounded-full">
        <span ref={numberRef} className="block">
          {currentVariant.number}
        </span>
      </div>
      <p className="text-gray-500 overflow-hidden">
        <span ref={labelRef} className="block">
          {currentVariant.label}
        </span>
      </p>
    </div>
  );
}
