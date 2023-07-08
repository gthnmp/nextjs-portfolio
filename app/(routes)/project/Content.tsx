import React from 'react';
import Navigation from '@/app/_component/project/Navigation';
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
    <article className="w-screen h-screen relative flex flex-col py-5">
      <Navigation/>
      <section className='grid-view-layout'>
        <Thumbnails/>
      </section>
      <section className='presentation-view-layout'>
      </section>
    </article>  
  );
};

export default Content;
