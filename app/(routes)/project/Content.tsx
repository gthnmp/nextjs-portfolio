import React from 'react';
import Project from '@/app/_component/project/Project';
import projectContent from '@/app/_api/project.json'
import {BsArrowDown} from 'react-icons/bs'

interface ContentProps {
  content?: {
    header?: any;
    main?: {
      certification: any;
      work: any;
    };
    footer?: {
      contact: any;
    };
  };
}


interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const titleLines: string[] = title.split('\n');

  return (
    <header className='relative flex flex-col justify-center items-center gap-5'>
      <span className='text-base'>02</span>
      <span className='font-sans text-2xl uppercase'>Gathan Mahesa</span>
      <h1 className='flex flex-col justify-center items-center text text-5xl lg:text-8xl font-serif'>
        {titleLines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h1>
    </header>
  );
}


const Content: React.FC<ContentProps> = () => {
  return (
    <article className="w-full  h-full flex flex-col justify-center items-center gap-20 pt-60 font-normal">
      <Header title={projectContent.header.title}/>
      <BsArrowDown className=''/>
      <main>
        <Project content={projectContent.main.Jakarta}/>
      </main>
    </article>
  );
};

export default Content;
