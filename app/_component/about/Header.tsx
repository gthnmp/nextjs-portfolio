interface HeaderProps {
  title: string;
  paragraph?: string;
}

export default function Header({ title, paragraph }: HeaderProps) {
  const titleLines: string[] = title.split('\n');
  const paragraphLines: string[] = paragraph ? paragraph.split('\n') : [];

  return (
    <header className='flex flex-col gap-20 lg:gap-40'>
      <h1 className='flex flex-col text text-5xl lg:text-8xl font-serif'>
        {titleLines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h1>

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
