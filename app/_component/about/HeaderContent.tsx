import Headline from "../global/Headline";

export interface HeaderProps {
  title: string;
  paragraph?: string;
}

export default function Header({ title, paragraph }: HeaderProps) {
  const titleLines = title.split('\n');
  const paragraphLines = paragraph ? paragraph.split('\n') : [];

  return (
    <header className="flex flex-col px-8 gap-20 lg:gap-40">
      <Headline alignment="text-left" chapterNumber="01">
        {titleLines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </Headline>
      {paragraph && (
        <p className="flex flex-col gap-10 text-xl lg:text-3xl leading-8 lg:leading-10">
          {paragraphLines.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </p>
      )}
    </header>
  );
}
