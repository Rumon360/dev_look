import React from "react";
import ImageComponent from "../animations/image-component";
import ArrowIcon from "./arrow-icon";

function EachService({ service }: any) {
  return (
    <div className="group cursor-pointer py-2 flex w-full items-center justify-between">
      <h2 className="overflow-hidden text-[3.375rem] group-hover:scale-95 transition-transform ease-in-out duration-500 origin-left font-semibold">
        <span className="inline-block service-title translate-y-4 opacity-0">
          {service.name}
        </span>
      </h2>
      <div className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-[transform,opacity] ease-in-out duration-500 flex items-center gap-6">
        <div className="text-[1.4rem]">
          <span className="text-zinc-500 text-base">Latest Case Study</span>
          <p className="leading-[1]">{service.case_study.title}</p>
        </div>
        <div className="relative h-[5rem] w-[5rem] rounded-full overflow-hidden">
          <ImageComponent alt="Case Study" src={service.case_study.image} />
        </div>
        <ArrowIcon />
      </div>
    </div>
  );
}

export default EachService;
