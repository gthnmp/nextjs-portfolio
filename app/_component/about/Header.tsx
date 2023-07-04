import Headline from "../global/Headline";

interface HeaderProps {
  title: string;
  paragraph?: string;
}

export default function Header({ title, paragraph }: HeaderProps) {
  const titleLines: string[] = title.split('\n');
  const paragraphLines: string[] = paragraph ? paragraph.split('\n') : [];

  return (
    <header className='flex flex-col gap-20 lg:gap-40'>
      <Headline alignment="text-left" chapterNumber={"01"}>{titleLines}</Headline>
      {paragraph && (
        <p className='flex flex-col gap-10 text-xl lg:text-3xl leading-8 lg:leading-10'>
          {paragraphLines.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </p>
      )}
    </header>
  );
}
