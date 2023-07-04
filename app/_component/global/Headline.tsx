import React from 'react';

type HeadlineProps = {
  alignment?: 'text-left' | 'text-center' | 'text-right';
  chapterNumber : string | number;
  children: React.ReactNode;
};

const Headline: React.FC<HeadlineProps> = ({ alignment = 'text-center', chapterNumber, children }) => {
  const classes = `flex flex-col text text-5xl lg:text-8xl font-serif`;

  return (
    <div className='flex flex-col text-center gap-5'>
      <span className='text-base'>{chapterNumber}</span>
      <span className='font-sans text-2xl uppercase'>Gathan Mahesa</span>
      <h1 className={classes}>
        {React.Children.map(children, (child, index) => (
          <span key={index} className='pb-3'>{child}</span>
        ))}
      </h1>
    </div>
  );
};

export default Headline;