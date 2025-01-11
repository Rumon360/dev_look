import React from "react";
import Service from "../ui/service";
import { Button } from "../ui/button";
import TextAnimationWrapper from "../animations/text-wrapper";
import AnimateInWrapper from "../animations/animate-in-wrapper";
import LineSlideIn from "../animations/line-slide-in";
import { ServicesSectionFormValues } from "@/schemas/service";

type Props = {
  serviceSection: ServicesSectionFormValues;
};

function Services({ serviceSection }: Props) {
  const description = serviceSection.description;
  const descriptionLines = description.split(". ").map((line) => line.trim());

  return (
    <section
      style={{
        backgroundImage:
          "radial-gradient(circle at 75% 140%, var(--primary) 0, transparent 35%)",
      }}
      className="w-full relative bg-foreground text-white py-32 px-container"
    >
      <p className="text-[1.469rem]">
        <TextAnimationWrapper text={serviceSection.heading} />
      </p>
      <Service serviceSection={serviceSection} />
      <div className="pt-16">
        <AnimateInWrapper>
          <h4 className="text-[3.375rem] text-primary font-semibold">
            Creative Agency
          </h4>
        </AnimateInWrapper>
        <div className="pt-6 flex items-end justify-between w-full">
          <LineSlideIn
            element="p"
            containerClass="max-w-[35.625rem]"
            className="text-[1.469rem]"
            lines={descriptionLines}
          />
          <AnimateInWrapper>
            <div className="space-x-4">
              <Button
                size={"lg"}
                className="border border-primary bg-transparent rounded-full text-[1.469rem]"
              >
                {serviceSection.num_of_projects}+ Projects
              </Button>
              <Button
                size={"lg"}
                className="border border-primary bg-transparent rounded-full text-[1.469rem]"
              >
                {serviceSection.num_of_awards} Awards
              </Button>
            </div>
          </AnimateInWrapper>
        </div>
      </div>
    </section>
  );
}

export default Services;
