import React from 'react';
import Content from './Content';
import content from '../../_api/project.json';
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
    <Wrapper>
      <Content/>
    </Wrapper>
  );
};

export default About;
