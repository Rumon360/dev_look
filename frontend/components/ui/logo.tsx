"use client";
import React, { useCallback, useRef } from "react";

import gsap from "gsap";

function Logo() {
  const scope = useRef(null);

  const animateHover = useCallback(() => {
    const tl = gsap.timeline({ ease: "elastic.out(1, 0.3)" });
    tl.to("#angle1", { transform: "matrix(0,0,0,1,12.31,0)" }, "a");
    tl.to("#angle2", { transform: "matrix(1,0,0.17633,1,-12.5,0)" }, "a");
    tl.to("#angle3", { transform: "matrix(1,0,0.17633,1,-12.5,0)" }, "a");
    tl.set("#angle2", { visibility: "hidden" });
    tl.set("#angle3", { visibility: "hidden" });
    tl.to("#line1, #line2, #line3", {
      transform: "translateY(-100%)",
      duration: 0.2,
      stagger: 0.1,
    });

    tl.to("#line1, #line2, #line3", {
      transform: "translateY(0%)",
      duration: 0.2,
      stagger: 0.1,
      delay: 0.2,
    });

    tl.set("#angle2", { visibility: "visible" });
    tl.set("#angle3", { visibility: "visible" });

    tl.to("#angle1", { transform: "matrix(1,0,0,1,0,0)" }, "b");
    tl.to("#angle2", { transform: "matrix(1,0,0,1,-0.25744,0)" }, "b");
    tl.to("#angle3", { transform: "matrix(1,0,0,1,-0.25744,0)" }, "b");
  }, []);

  return (
    <svg
      ref={scope}
      id="logo"
      className="w-full h-auto"
      onMouseEnter={animateHover}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64.06 32"
    >
      {/* Line 1 */}
      <rect
        id="line1"
        x="12.31"
        width="6.78"
        height={32}
        transform="matrix(1,0,0,1,0,0)"
      />
      {/* Polygon 1 */}
      <polygon
        id="angle1"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transformOrigin: "0px 0px",
        }}
        points="0 32 6.78 32 12.31 0 5.53 0 0 32"
        transform="matrix(1,0,0,1,0,0)"
      />
      {/* Line 2 */}
      <rect
        id="line2"
        x="25.88"
        width="6.78"
        height={32}
        transform="matrix(1,0,0,1,0,0)"
      />
      {/* Polygon 2 */}
      <polygon
        id="angle2"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transformOrigin: "0px 0px",
        }}
        points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
        transform="matrix(1,0,0,1,-0.25744,0)"
      />
      {/* Line 3 */}
      <rect
        id="line3"
        x="44.97"
        width="6.78"
        height={32}
        transform="matrix(1,0,0,1,0,0)"
      />
      {/* Polygon 3 */}
      <polygon
        id="angle3"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transformOrigin: "0px 0px",
        }}
        points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
        transform="matrix(1,0,0,1,-0.25744,0)"
      />
    </svg>
  );
}

export default Logo;
