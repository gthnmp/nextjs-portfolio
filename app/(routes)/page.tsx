import React from 'react';
import Minimap from '../_component/global/Minimap';
import Content from '../_component/about/Content';
import content from '@/app/_api/homepage.json';
import Wrapper from '@/app/_component/global/SmoothScroll';

export async function generateMetadata() {
  const { title, description, viewport, robots, charset } = content.metadata;
  return {
    title,
    description,
    viewport,
    robots,
    charset
  };
}

export default function Homepage(){
  return (
    <>
      <Minimap />
      <Wrapper className="grid grid-cols-2 lg:grid-cols-3 auto-rows-max lg:px-20 lg:gap-x-20">
        <Content content={content} />
      </Wrapper>
    </>
  );
};
