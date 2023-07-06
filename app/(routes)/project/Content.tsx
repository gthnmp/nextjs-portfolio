import React from 'react';
import Socials from '@/app/_component/global/Socials';
import Link from 'next/link';
import Thumbnails from '@/app/_component/project/Thumbnails';
import './grid.css'

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

const Content: React.FC<ContentProps> = () => {
  return (
    <article className="w-full h-full relative">
      <section className='grid-view-layout h-screen w-screen gap-y-5 gap-x-10 py-5 px-10 font-medium text-base'>
        <h1 className='title'>Projects</h1>
        <button className='grid-view flex'>Grid View</button>
        <button className='line-view flex'>Line View</button>
        <button className='list-view flex'>List View</button>
        <Link href={"/about"} className='to-about'>About</Link>
        <Socials className='socials flex justify-center items-center gap-4'/>
        <Thumbnails/>
      </section>
      <section className='presentation-view-layout w-screen h-48 absolute bottom-0 px-40 gap-x-5 py-10'>
      </section>
    </article>  
  );
};

export default Content;
