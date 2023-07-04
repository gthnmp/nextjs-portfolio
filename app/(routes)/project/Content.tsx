import React from 'react';
import Project from '@/app/_component/project/Project';
import projectContent from '@/app/_api/project.json'
import {BsArrowDown} from 'react-icons/bs'
import Headline from '@/app/_component/global/Headline';

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
      <Headline chapterNumber={"02"}>{titleLines}</Headline>
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
