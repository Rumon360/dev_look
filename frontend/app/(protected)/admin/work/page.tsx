import { getWorkSection } from "@/actions/work";
import WorkSectionForm from "../../_components/work-form";

async function WorkPage() {
  const data = await getWorkSection();
  return (
    <div className="py-20">
      <WorkSectionForm data={data.data[0]} />
    </div>
  );
}

export default WorkPage;
