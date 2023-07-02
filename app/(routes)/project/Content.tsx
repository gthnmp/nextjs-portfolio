import React from 'react';
import Image from 'next/image';
import Header from '@/app/_component/about/Header';
import content from '@/app/_api/project.json'

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


const WideImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  return (
    <div className='w-screen h-screen bg-green-500'>
      <Image src={src} alt={alt} />
    </div>
  );
};

const Content: React.FC<ContentProps> = () => {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center gap-40 pt-96 font-normal">
      <Header title={content.header.title}/>
      {/* <WideImage/> */}

    </article>
  );
};

export default Content;
