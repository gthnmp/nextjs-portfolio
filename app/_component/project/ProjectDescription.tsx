export type DescriptionProps = {
  number: string;
  paragraph: string;
};

export default function ProjectDescription({ number, paragraph }: DescriptionProps) {
  return (
    <div className="description w-full px-20  col-start-2 font-light">
      <div className="text-2xl flex gap-10">
        <h2 className="text-gray-400 text-xl">{number}</h2>
        <p className="pl-20 -indent-20 tracking-wide text-justify">{paragraph}</p>
      </div>
    </div>
  );
}
