"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = { onAnimationComplete?: () => void };

gsap.registerPlugin(useGSAP);

function LoadingAnimation({ onAnimationComplete }: Props) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        ease: "power2.out",
        onComplete: () => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        },
      });

      gsap.set(scope.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      // Animate lines first
      tl.to("#line1, #line2, #line3", {
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      });

      // Show and animate angles
      tl.set(["#angle2", "#angle3"], {
        visibility: "visible",
      });

      tl.to(
        ["#angle1", "#angle2", "#angle3"],
        {
          duration: 0.6,
          transform: "matrix(1,0,0,1,0,0)",
        },
        "b"
      );

      // Animate clip-path last
      tl.to(scope.current, {
        duration: 0.8,
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        ease: "power2.inOut",
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="fixed z-[999] text-6xl flex justify-center items-center h-screen w-full inset-0 bg-[#111111]"
    >
      <div className="max-w-[5.5rem] h-auto block">
        <svg
          id="logo"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64.06 32"
          fill="white"
        >
          {/* Line 1 */}
          <rect
            id="line1"
            x="12.31"
            width="6.78"
            height="32"
            style={{
              transform: "translateY(-100%)",
            }}
          />
          {/* Angle 1 */}
          <polygon
            id="angle1"
            style={{
              transformOrigin: "0px 0px",
              transform: "matrix(0,0,0,1,12.31,0)",
            }}
            points="0 32 6.78 32 12.31 0 5.53 0 0 32"
          />
          {/* Line 2 */}
          <rect
            id="line2"
            x="25.88"
            width="6.78"
            height="32"
            style={{
              transform: "translateY(-100%)",
            }}
          />
          {/* Angle 2 */}
          <polygon
            id="angle2"
            style={{
              transformOrigin: "0px 0px",
              visibility: "hidden",
              transform: "matrix(1,0,0.17633,1,-12.5,0)",
            }}
            points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
          />
          {/* Line 3 */}
          <rect
            id="line3"
            x="44.97"
            width="6.78"
            height="32"
            style={{
              transform: "translateY(-100%)",
            }}
          />
          {/* Angle 3 */}
          <polygon
            id="angle3"
            style={{
              transformOrigin: "0px 0px",
              visibility: "hidden",
              transform: "matrix(1,0,0.17633,1,-12.5,0)",
            }}
            points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingAnimation;
