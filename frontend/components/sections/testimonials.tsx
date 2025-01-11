"use client";

import React, { useRef } from "react";
import TestimonialCard from "../ui/testimonial-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateInWrapper from "../animations/animate-in-wrapper";

const testimonials = [
  {
    id: 1,
    qoute:
      "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
    name: "Steven Glibbery",
    company: "TGA Mobility",
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/tga-logo-250x250.jpg",
  },
  {
    id: 2,
    qoute:
      "Artistsweb built our new website and it has been an absolute pleasure working with the whole team. Excellent communication and they built us just an incredible looking website.",
    name: "Nathan Smith",
    company: "Tech SuperPowers",
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/nathan-s-250x250.jpg",
  },
  {
    id: 3,
    qoute:
      "Artistsweb are a great team of professionals to work with. They listened to our requirements very closely and delivered complex solutions with detail and outstanding creativity and more importantly to deadlines other agencies could not previously meet. We would highly recommend them to any corporation looking for a talented team of digital strategists, designers and developers.",
    name: "David Cortes",
    company: "Costa Coffee",
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/costa-coffee-250x250.jpg",
  },
  {
    id: 4,
    qoute:
      "In the years we've worked with Artistsweb, they have consistently been a solid, reliable, dedicated and effective partner. We value greatly their capacity to work quickly and the advice that they give us. Their knowledge and development skillset is unrivalled compared to other digital agencies we've worked with and we shall continue to collaborate with them undoubtedly, for many years to come.",
    name: "Oliver Cripps",
    company: "Media Tree",
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/mediatree-250x250.jpg",
  },
  {
    id: 5,
    qoute:
      "I had the absolute privilege of working with this wonderful team. The work they presented for my webpage was exactly what I had in mind. They are a team of talented artists who understood the concept and managed to deliver exactly what I was looking for. You don't need to look any further if you're looking for quality, professionalism, and a total artistic perspective. These guys are amazing! I won't leave them.",
    name: "Fortunato Angelini",
    company: "Re-Core Pilates",
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/website-design-agency-london-250x250.jpeg",
  },
];

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
  const container = useRef(null);
  const meterRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        meterRef.current,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom bottom",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(meterRef.current, {
                force3D: true,
                backfaceVisibility: "hidden",
              });
            },
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="testimonials"
      ref={container}
      style={{
        backgroundImage:
          "radial-gradient(circle at -30% 21%, var(--primary) 0, transparent 30%), radial-gradient(circle at 120% 80%, var(--primary) 0, transparent 30%)",
      }}
      className="bg-foreground relative h-full w-full text-background py-32 px-container"
    >
      <div className="w-full max-w-[73.125rem] mx-auto h-full relative">
        <AnimateInWrapper>
          <h1 className="text-[3.375rem] font-semibold">Client Feedback</h1>
        </AnimateInWrapper>
        <AnimateInWrapper delay={0.2}>
          <div className="pt-10 text-[1.469rem] flex w-full justify-between items-center">
            <p>
              We&apos;re collaborators - We build tight-knit partnerships with
              our clients.
            </p>
            <div className="text-[#71777E] flex items-center gap-4">
              <div className="w-[2.5rem] h-[2.5rem] border-2 border-[#71777E] border-t-[hsla(0,0%,100%,0)] animate-spin rounded-full" />
              <p>Keep scrolling</p>
            </div>
          </div>
        </AnimateInWrapper>
        <div className="mt-16 flex flex-col gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-[2.625vw] z-30 h-full">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="relative h-[12.5rem] w-[0.5rem] bg-muted rounded-full overflow-hidden">
            <div
              ref={meterRef}
              className="absolute inset-0 bg-primary rounded-full will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
