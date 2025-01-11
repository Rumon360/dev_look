"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
function Bar() {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.inOut",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="fixed w-[calc(100%-4px)] translate-y-4 opacity-0 z-30 bottom-12 h-[2rem]"
    >
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 150%, #545cff 0, transparent 50%)",
          boxShadow: "0 0 0 2px hsla(0, 0%, 100%, .3)",
        }}
        className="h-full bg-black w-full max-w-[26.25rem] rounded-full mx-auto"
      ></div>
    </div>
  );
}

export default Bar;
