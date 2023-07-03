import React from 'react';

type HeadlineProps = {
  alignment?: 'text-left' | 'text-center' | 'text-right';
  children: React.ReactNode;
};

const Headline: React.FC<HeadlineProps> = ({ alignment = 'text-center', children }) => {
  const classes = `flex flex-col text text-5xl lg:text-8xl font-serif ${alignment}`;

  return (
    <h1 className={classes}>
      {React.Children.map(children, (child, index) => (
        <span key={index}>{child}</span>
      ))}
    </h1>
  );
};

export default Headline;