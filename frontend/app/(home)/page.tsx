import { getServiceSection } from "@/actions/service";
import { getWorkSection } from "@/actions/work";
import Home from "@/components/home";

export default async function Index() {
  const serviceSection = await getServiceSection();
  const workSection = await getWorkSection();

  return (
    <Home
      serviceSection={serviceSection.data}
      workSection={workSection.data[0]}
    />
  );
}
