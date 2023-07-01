import React from 'react';
import Chapters from './Chapters';

export function createChapters(data : any) {
  const sections = data.sections;

  return (
    <article className="flex h-full w-screen flex-col items-center justify-between px-24 gap-40 pb-60 lg:gap-60 lg:pb-60">
      {
        Object.entries(sections).map(([name, section], index) => (
          <Chapters
            key={name}
            id={name}
            name={name}
            num={index + 1}
            title={section.title}
            href={section.directTo}
            description={section.summary} />
        ))
      }
    </article>
  )
  
}
