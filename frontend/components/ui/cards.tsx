import React from "react";
import ImageComponent from "../animations/image-component";
import { Button } from "./button";
import SlideInOut from "../animations/slider-in-out";
import { WorkSectionFormValues } from "@/schemas/work";

const cards = [
  {
    id: 1,
    title: "Romans & Partners",
    latest: true,
    tags: ["UI/UX Design", "Property Portal"],
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Estate-Agency-Web-Design-London.jpg",
  },
  {
    id: 2,
    title: "Alveena Casa",
    latest: false,
    tags: ["UI/UX Design", "E-Commerce"],
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Alveena_Casa_London_Web_Design_New-1400x1582.jpg",
  },
  {
    id: 3,
    title: "Fudli App",
    latest: false,
    tags: ["E-Commerce", "Digital Product"],
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/Fudli-Restaurant-Food-Order-System-1400x1582.jpg",
  },
  {
    id: 4,
    title: "Tech Superpowers",
    latest: false,
    tags: ["UI/UX Design", "Development"],
    image:
      "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/03_TSP_London_Web_Design-1400x1582.jpg",
  },
];

function Cards({ workSection }: { workSection: WorkSectionFormValues }) {
  return (
    <div className="flex gap-6 items-start w-full h-full">
      {workSection?.works?.map((card, index) => (
        <div
          key={card.title}
          className="blue-box-shadow shrink-0 w-[41.375rem] h-[33.063rem] rounded-[2rem] relative overflow-hidden bg-gray-500"
        >
          <ImageComponent src={card.image} alt={card.title} />
          <div className="absolute z-10 h-full w-full inset-0">
            <div className="h-full w-full relative">
              {index === 0 && (
                <div className="bg-primary text-base absolute top-10 right-10 text-white rounded-full px-6 font-semibold py-2">
                  Latest
                </div>
              )}
              <div className="flex flex-col h-full justify-end p-10 text-white">
                <h2 className="text-[2.5rem] font-semibold">{card.title}</h2>
                <div className="flex gap-4 items-center pt-4">
                  {card.tags.map((tag) => (
                    <Button key={tag} variant={"chip"} size={"chip"}>
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t from-black/80 to-transparent absolute h-full w-full inset-0" />
        </div>
      ))}
      <div className="w-[31.25rem] shrink-0 h-full flex flex-col gap-4 justify-center items-center">
        <h2 className="text-[3.375rem] capitalize font-semibold">View more</h2>
        <SlideInOut
          label="Case Studies"
          className="text-[1.4rem] rounded-full"
          variant={"outline"}
          size="lg"
        />
      </div>
    </div>
  );
}

export default Cards;
