import { createPreface } from '../_component/tableofcontent/createPreface';
import { createChapters } from '../_component/tableofcontent/createChapters';
import Wrapper from '../_component/SmoothScroll';
import { FC } from 'react';
import content from '@/app/_api/tableofcontent.json'

export async function generateMetadata(){
  const { title, description, viewport, robots, charset } = content.metadata;
  return{
    title,
    description,
    viewport,
    robots,
    charset
  }
}

const TableOfContent: FC = () => {
  return (
    <Wrapper>
      {createPreface(content)}
      {createChapters(content)}
    </Wrapper>
  );
}

export default TableOfContent;
