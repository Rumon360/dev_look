"use client";
import { useRef } from "react";
import ImageComponent from "../animations/image-component";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

type Testimonial = {
  id: number;
  qoute: string;
  name: string;
  company: string;
  image: string;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const scope = useRef(null);
  const { name, qoute, company, image } = testimonial;

  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        { scale: 0.8 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: scope.current,
            start: "top +80%",
            end: "bottom +50%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: scope }
  );

  return (
    <div
      ref={scope}
      style={{ boxShadow: "0 0 0 1px hsla(0, 0%, 100%, .2)" }}
      className="w-full p-[3.875rem] rounded-3xl"
    >
      <blockquote className="text-[1.938rem] font-semibold">
        <p>&quot;{qoute}&quot;</p>
      </blockquote>
      <div className="pt-16 flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="h-[4.375rem] w-[4.375rem] rounded-full overflow-hidden relative">
            <ImageComponent src={image} alt={name} />
          </div>
          <p className="text-[1.461rem] text-[#71777E]">{name}</p>
        </div>
        <p className="text-[1.461rem] text-primary">{company}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
