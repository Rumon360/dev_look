"use client";
import { useCallback, memo, useRef } from "react";
import gsap from "gsap";
import SlideInOut from "../animations/slider-in-out";
import { useGSAP } from "@gsap/react";

const SOCIAL_LINKS = ["Instagram", "Facebook", "Twitter", "Awwwards"] as const;
const NAVIGATION_ITEMS = [
  { label: "Case Studies", count: 13 },
  { label: "Our Agency" },
  { label: "Contact Us" },
  { label: "News" },
] as const;

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseButton = memo(() => (
  <div
    className="w-10 h-10 group relative cursor-pointer transition-colors duration-300 ease-in-out bg-white/15 hover:bg-white/25 rounded-full"
    style={{ boxShadow: "0 0 0 0 hsla(0, 0%, 100%, 0)" }}
  >
    <span className="w-full h-full relative origin-center flex items-center justify-center rounded-full">
      {[45, -45].map((rotation, index) => (
        <span
          key={index}
          className="absolute group-hover:scale-110 bg-white w-3.5 h-[0.094rem] transition-transform duration-300 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      ))}
    </span>
  </div>
));
CloseButton.displayName = "CloseButton";

const NavigationItem = memo(
  ({ label, count }: { label: string; count?: number }) => {
    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        gsap
          .timeline({
            ease: "cubic-bezier(0.25, 0, 0.25, 1)",
          })
          .to(e.target, {
            y: "-100%",
            duration: 0.3,
          })
          .set(e.target, {
            y: "100%",
          })
          .to(e.target, {
            y: "0%",
            duration: 0.3,
          });
      },
      []
    );

    return (
      <li className="nav-item flex items-center gap-4">
        <p className="text-[3.406rem] font-semibold cursor-pointer overflow-hidden">
          <span onMouseEnter={handleMouseEnter} className="block leading-none">
            {label}
          </span>
        </p>
        {count && (
          <div className="border flex justify-center items-center border-white/30 rounded-full text-[calc(16px+8*(100vw-576px)/1024)] w-[calc(40px+30*(100vw-576px)/1024)] h-[calc(40px+30*(100vw-576px)/1024)]">
            {count}
          </div>
        )}
      </li>
    );
  }
);
NavigationItem.displayName = "NavigationItem";

const SocialLinks = memo(() => (
  <div>
    <p id="follow-us-social" className="text-base text-white opacity-45">
      Follow us
    </p>
    <ul className="flex gap-4 items-center">
      {SOCIAL_LINKS.map((link) => (
        <li key={link} className="social-link">
          {link}
        </li>
      ))}
    </ul>
  </div>
));
SocialLinks.displayName = "SocialLinks";

function OverlayMenu({ setIsMenuOpen }: Props) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const closeOverlayMenu = useCallback(() => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      onComplete: () => {
        setIsMenuOpen(false);
      },
    });
  }, [setIsMenuOpen]);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        containerRef,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        },
        "a"
      );
      tl.fromTo(
        overlayRef.current,
        {
          y: "-120%",
          transform: "translate3d(0px, 0px, 0px) scale(1, 2)",
        },
        {
          y: "0%",
          transform: "translate(0px, 0px) scale(1, 1)",
          duration: 0.5,
          ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
        "a"
      );

      tl.fromTo(
        "#overlay-menu-header",
        {
          y: "10%",
          opacity: 0,
        },
        { y: "0%", opacity: 1, duration: 0.3 }
      );

      tl.fromTo(
        ".nav-item",
        {
          y: "10%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        },
        "<0.05"
      );

      tl.fromTo(
        "#follow-us-social",
        {
          y: "10%",
          opacity: 0,
        },
        { y: "0%", opacity: 1, duration: 0.2 },
        "<0.4"
      );

      tl.fromTo(
        ".get-in-touch-button",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.2 },
        "<0"
      );

      tl.fromTo(
        ".social-link",
        {
          y: "20%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        },
        "<0.3"
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      onClick={closeOverlayMenu}
      id="overlay"
      className="h-screen animate-in fixed flex justify-center items-center inset-0 w-full bg-black/50 backdrop-blur-sm z-[9999]"
    >
      <div
        ref={overlayRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full text-white origin-top mx-auto max-w-[58.75rem] h-full max-h-[calc(100%-40px)] rounded-3xl bg-foreground"
        style={{
          backgroundImage:
            "radial-gradient(circle at 73% 145%, #545cff 0, transparent 42%)",
          boxShadow: "0 0 0 1px hsla(0, 0%, 100%, .1)",
          transformOrigin: "50% 100%",
        }}
      >
        <div className="p-[calc(32px+48*(100vw-576px)/1024)] w-full">
          <div
            id="overlay-menu-header"
            className="flex items-center w-full justify-between"
          >
            <h1 className="text-[1.469rem]">Navigation</h1>
            <button onClick={closeOverlayMenu}>
              <CloseButton />
            </button>
          </div>
          <div className="pt-6">
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationItem key={item.label} {...item} />
              ))}
            </ul>
          </div>

          <div className="pt-20 flex items-center justify-between w-full">
            <SocialLinks />
            <SlideInOut
              size="lg"
              label="Get in touch"
              variant="primary"
              className="text-white get-in-touch-button text-[1.469rem] font-semibold transition-transform hover:scale-105 ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverlayMenu;
