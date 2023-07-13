import WorkCard from "./WorkCard";

type Props = {};

function WorkSection({}: Props) {
  return (
    <div className="py-10 bg-black w-full flex justify-center">
      <div className="w-full min-h-screen grid grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-y-10 justify-items-center ">
        <WorkCard number={1} />
        <WorkCard number={2} />
        <WorkCard number={3} />
        <WorkCard number={4} />
        <WorkCard number={5} />
        <WorkCard number={6} />
      </div>
    </div>
  );
}

export default WorkSection;
