"use client";
import React, { useRef } from "react";
import SlideInOut from "../animations/slider-in-out";
import AnimateInWrapper from "../animations/animate-in-wrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useInView from "@/hooks/use-in-view";

const services = [
  "E-Commerce",
  "Website Design",
  "Web Development",
  "Digital Products",
  "Brand Identities",
  "SEO Optimization",
];

gsap.registerPlugin(useGSAP);
function MoreServices() {
  const container = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView({
    threshold: 0.5,
    targetSelector: container,
  });

  useGSAP(
    () => {
      if (isInView) {
        gsap.to(".service-title", {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          stagger: 0.1,
          ease: "cubic-bezier(0.25, 0, 0.25, 1)",
        });
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.to(cardRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        delay: 0.5,
        ease: "cubic-bezier(0.25, 0, 0.25, 1)",
      }).to(".card-info", {
        opacity: 1,
        duration: 0.3,
      });
    },
    { scope: container, dependencies: [isInView] }
  );

  return (
    <section ref={container} className="px-container py-32">
      <AnimateInWrapper>
        <h1 className="text-[3.375rem] font-semibold">We&apos;re good at</h1>
      </AnimateInWrapper>
      <div className="pt-4 grid grid-cols-[1fr,50.75vw] items-center justify-between">
        <div className="">
          <AnimateInWrapper>
            <p className="text-base">Services</p>
          </AnimateInWrapper>
          <div className="space-y-2 pt-4">
            {services.map((service) => (
              <p
                key={service}
                className="service-title translate-y-4 opacity-0 text-[1.969rem] font-semibold"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
        <div
          ref={cardRef}
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          className="bg-primary p-[3.875rem] text-[2.438rem] rounded-3xl text-white"
        >
          <div className="card-info opacity-0">
            <p className="font-semibold">
              Let&apos;s start with a conversation about how we can help you!
              Get in touch, we&apos;re a nice bunch.
            </p>
            <div className="flex items-center space-x-4 pt-6">
              <SlideInOut
                label="Let's talk"
                className="rounded-full bg-white border-none text-[1.469rem] text-foreground"
                size={"lg"}
              />
              <SlideInOut
                label="0207 112 82 85"
                className="rounded-full text-[1.469rem] bg-transparent border border-gray-400 text-white"
                size={"lg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreServices;
