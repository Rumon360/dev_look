"use client";

import React, { useEffect, useState, useRef } from "react";
import JBCMarketsLogo from "../ui/logos/jbc-markets-logo";
import JlcLogo from "../ui/logos/jlc-logo";
import TGALogo from "../ui/logos/tga-logo";
import LuxeCollectiveLogo from "../ui/logos/luxe-collective-logo";
import RichemontLogo from "../ui/logos/richemont-logo";
import TechSuperPowersLogo from "../ui/logos/ts-logo";
import VortexaLogo from "../ui/logos/vortexa-logo";
import BaschungLogo from "../ui/logos/baschung-logo";
import FudliLogo from "../ui/logos/fudli-logo";
import KTLogo from "../ui/logos/knowledge-train-logo";
import DeezerLogo from "../ui/logos/deezer-logo";
import BMWLogo from "../ui/logos/bmw-logo";
import CostaLogo from "../ui/logos/costa-logo";
import ITVLogo from "../ui/logos/itv-logo";
import BBCLogo from "../ui/logos/bbc-logo";
import gsap from "gsap";

const logos = [
  [
    { id: 1, icon: <JlcLogo /> },
    { id: 2, icon: <TGALogo /> },
    { id: 3, icon: <LuxeCollectiveLogo /> },
    { id: 4, icon: <RichemontLogo /> },
    { id: 5, icon: <JBCMarketsLogo /> },
  ],
  [
    { id: 1, icon: <TechSuperPowersLogo /> },
    { id: 2, icon: <VortexaLogo /> },
    { id: 3, icon: <BaschungLogo /> },
    { id: 4, icon: <FudliLogo /> },
    { id: 5, icon: <KTLogo /> },
  ],
  [
    { id: 1, icon: <DeezerLogo /> },
    { id: 2, icon: <BMWLogo /> },
    { id: 3, icon: <CostaLogo /> },
    { id: 4, icon: <ITVLogo /> },
    { id: 5, icon: <BBCLogo /> },
  ],
];

const INTERVAL = 3500;

function LogoSwapper() {
  const [activeSet, setActiveSet] = useState(0);
  const animationCount = useRef(0);

  const animate = () => {
    animationCount.current += 1;
    const isReverse = Math.floor((animationCount.current - 1) / 3) % 2 === 1;

    const tl = gsap.timeline({
      ease: "power2.out",
      duration: 0.8,
    });

    if (isReverse) {
      tl.to(".set-logo", {
        y: "100%",
        opacity: 0,
        stagger: {
          each: 0.2,
          from: "end",
        },
        onComplete: () => {
          setActiveSet((prev) => (prev + 1) % logos.length);
        },
      });
      tl.set(".set-logo", {
        y: "-100%",
      });
    } else {
      tl.to(".set-logo", {
        y: "-100%",
        opacity: 0,
        stagger: 0.2,
        onComplete: () => {
          setActiveSet((prev) => (prev + 1) % logos.length);
        },
      });
      tl.set(".set-logo", {
        y: "100%",
      });
    }

    tl.to(".set-logo", {
      y: "0%",
      opacity: 1,
      stagger: isReverse
        ? {
            each: 0.1,
            from: "end",
          }
        : 0.1,
    });
  };

  useEffect(() => {
    gsap.to(".set-logo", {
      y: "0%",
      delay: 0.2,
      opacity: 1,
      stagger: 0.2,
    });
    const intervalId = setInterval(animate, INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="logo-swapper-container" className="pt-24 w-full">
      <div className="h-[4.159rem] w-full overflow-hidden">
        <div className="flex gap-[2rem] justify-between items-center w-full h-full">
          {logos[activeSet].map((set) => (
            <div
              key={set.id}
              className="set-logo translate-y-full opacity-0 h-full relative w-full max-w-[13vw]"
            >
              {set.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSwapper;
