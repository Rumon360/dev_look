import { getServiceSection } from "@/actions/service";
import ServicesSectionForm from "../../_components/sevice-form";

async function ServicePage() {
  const data = await getServiceSection();

  return (
    <div className="py-20">
      <ServicesSectionForm data={data.data} />
    </div>
  );
}

export default ServicePage;
