"use client";

import Link from "next/link";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import SlideInOut from "../animations/slider-in-out";
import { useState, useEffect } from "react";
import Menu from "../ui/menu";
import gsap from "gsap";
import OverlayMenu from "../ui/overlay-menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        gsap.to("header", {
          y: -100,
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      } else if (currentScrollY < lastScrollY) {
        gsap.to("header", {
          y: 0,
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className="sticky z-50 bg-white/60 top-0 backdrop-blur-md flex justify-between items-center h-[calc(60px+40*(100vw-576px)/1024)] w-full px-container">
        <Link
          href={"/"}
          className="max-w-[calc(50px+14*(100vw-576px)/1024)] h-auto block"
        >
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <SlideInOut
                variant={"primaryOutline"}
                size={"primaryOutline"}
                label="Get in touch"
                className="bg-transparent"
              />
            </li>
            <li>
              <Button
                variant={"menu"}
                size={"menu"}
                className="overflow-hidden"
              >
                <Menu setIsMenuOpen={setIsMenuOpen} />
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && <OverlayMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
}

export default Navbar;
