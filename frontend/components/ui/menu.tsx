"use client";

import gsap from "gsap";
import { useCallback, useRef } from "react";

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setIsMenuOpen }: Props) => {
  const scope = useRef<HTMLDivElement>(null);
  const hoverStart = useCallback(() => {
    const element = scope.current;
    if (!element) return;
    const height = element.getBoundingClientRect().height;

    const tl = gsap.timeline();

    tl.to(".menu-line", {
      y: -height,
      scaleY: 1.5,
      duration: 0.5,
      ease: "cubic-bezier(0.25, 0, 0.25, 1)",
      stagger: 0.1,
    });

    tl.set(".menu-line", { y: height });

    tl.to(".menu-line", {
      y: 0,
      scaleY: 1,
      duration: 0.5,
      ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      stagger: 0.1,
    });
  }, []);

  return (
    <div
      ref={scope}
      onMouseEnter={hoverStart}
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="flex relative h-full w-full flex-col justify-center items-center gap-1"
    >
      <span className="menu-line block w-3.5 h-0.5 bg-black" />
      <span className="menu-line block w-3.5 h-0.5 bg-black" />
    </div>
  );
};

export default Menu;
