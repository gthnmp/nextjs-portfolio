import React from 'react';
import Minimap from './Minimap';
import Content from './Content';
import content from '../../_api/about.json';
import Wrapper from '@/app/_component/SmoothScroll';

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
      <div className="flex justify-end w-screen h-full px-4 lg:px-24">
        <Content content={content} />
      </div>
    </Wrapper>
    </>
  );
};

export default About;
