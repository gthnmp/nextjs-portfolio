import React from 'react';
import Minimap from '../_component/about/Minimap';
import Content from '../_component/about/Content';
import content from '@/app/_api/about.json';
import Wrapper from '@/app/_component/global/SmoothScroll';

interface AboutProps {}

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

const About: React.FC<AboutProps> = () => {
  return (
    <>
    <Minimap />
    <Wrapper>
      <div className="grid grid-cols-3 auto-rows-max px-20 gap-x-20">
        <Content content={content} />
      </div>
    </Wrapper>
    </>
  );
};

export default About;
