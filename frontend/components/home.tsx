"use client";

import LoadingAnimation from "@/components/animations/loading-anim";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import MoreServices from "@/components/sections/more-services";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Work from "@/components/sections/work";
import Bar from "@/components/ui/bar";
import { ServicesSectionFormValues } from "@/schemas/service";
import { WorkSectionFormValues } from "@/schemas/work";
import { useState } from "react";

type Props = {
  serviceSection: ServicesSectionFormValues;
  workSection: WorkSectionFormValues;
};

function Home({ serviceSection, workSection }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading)
    return <LoadingAnimation onAnimationComplete={() => setIsLoading(false)} />;

  return (
    <div>
      <Hero />
      <Work workSection={workSection} />
      <Services serviceSection={serviceSection} />
      <About />
      <Info />
      <MoreServices />
      <Testimonials />
      <Footer />
      <Bar />
    </div>
  );
}

export default Home;
