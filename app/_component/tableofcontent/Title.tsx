import Link from "next/link";

type TitleProps = {
  title: string;
  href: string;
};

export default function Title ({title, href} : TitleProps){
  const titlePerLines = title.split('\n');
  return(
    <Link href={href} className="z-40 lg:text-8xl text-5xl flex flex-col justify-center items-center px-8 text-center w-full leading-tight tracking-wide font-serif font-medium uppercase">
      {titlePerLines.map((line,index) => (
        <span key={index}>{line}</span>
      ))}
    </Link>
  )
}