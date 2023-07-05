import WorkCard from "./WorkCard";

type Props = {};

function WorkSection({}: Props) {
  return (
    <div className="mt-5 mb-5 lg:mt-0 w-full flex justify-center">
      <div className="w-full min-h-screen grid grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-y-10 justify-items-center ">
        {/* Card 1 */}
        <WorkCard />
        {/* Card 2 */}
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}

export default WorkSection;
