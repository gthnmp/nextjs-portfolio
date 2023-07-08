import React from 'react';

type HeadlineProps = {
  alignment?: 'text-left' | 'text-center' | 'text-right';
  chapterNumber : string | number;
  children: React.ReactNode;
};

const Headline: React.FC<HeadlineProps> = ({ alignment = 'text-center', chapterNumber, children }) => {
  const classes = `flex flex-col text text-5xl lg:text-8xl font-sans font-semibold uppercase`;

  return (
    <h1 className={classes}>
      {React.Children.map(children, (child, index) => (
        <span key={index} className='pb-3'>{child}</span>
      ))}
    </h1>
  );
};

export default Headline;