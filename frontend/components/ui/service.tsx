"use client";
import { useRef } from "react";
import EachService from "./each-service";
import { useGSAP } from "@gsap/react";
import useInView from "@/hooks/use-in-view";
import gsap from "gsap";
import { ServicesSectionFormValues } from "@/schemas/service";

type Props = {
  serviceSection: ServicesSectionFormValues;
};

gsap.registerPlugin(useGSAP);

function Service({ serviceSection }: Props) {
  const container = useRef(null);
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
    },
    { scope: container, dependencies: [isInView] }
  );

  return (
    <div
      ref={container}
      className="flex flex-col pb-12 border-b border-gray-500"
    >
      {serviceSection.services.map((service: any, index) => (
        <EachService key={index} service={service} />
      ))}
    </div>
  );
}

export default Service;
