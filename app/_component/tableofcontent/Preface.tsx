import Description from "./Description";

export default function Preface({ name, title, summary }: {
  name: string, title: string, summary: string
}) {
  const titlePerLines = title.split('\n');
  return (
    <header id={name} className="relative w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="lg:text-8xl text-6xl px-8 font-sans font-semibold flex flex-col text-center uppercase w-full leading-none tracking-normal">
        {titlePerLines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h1>
      <Description description={summary}/>
    </header>
  );
}
