"use client";

import { useRef } from "react";
import SlideInOut from "../animations/slider-in-out";
import Cards from "../ui/cards";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { WorkSectionFormValues } from "@/schemas/work";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type Props = {
  workSection: WorkSectionFormValues;
};

function Work({ workSection }: Props) {
  const container = useRef(null);
  const worksContainer = useRef(null);

  // console.log(workSection);

  useGSAP(
    () => {
      gsap.to(worksContainer.current, {
        x: "-180%",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      style={{
        height: (workSection.works.length + 1) * 100 + "vh",
      }}
      className={`w-full relative px-container`}
    >
      <div className="h-screen w-full sticky top-0">
        <div ref={worksContainer} className="py-32 h-full flex items-center">
          <div className="h-full shrink-0 w-[31.25rem] flex justify-between items-start flex-col">
            <div>
              <div className="flex gap-6 items-center">
                <h1 className="text-[3.375rem] font-semibold">Work</h1>
                <span className="text-[1.4rem] w-[4.25rem] h-[4.25rem] border-gray-500 flex justify-center items-center border rounded-full">
                  {workSection.years_of_work}
                </span>
              </div>
              <p className="text-[1.4rem] max-w-[20rem] pt-4">
                {workSection.description}
              </p>
            </div>
            <SlideInOut
              label="Case Studies"
              className="text-[1.4rem] rounded-full"
              variant={"outline"}
              size="lg"
            />
          </div>
          <Cards workSection={workSection} />
        </div>
      </div>
    </section>
  );
}

export default Work;
