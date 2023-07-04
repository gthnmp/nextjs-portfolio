import { createPreface } from '../_component/tableofcontent/createPreface';
import { createChapters } from '../_component/tableofcontent/createChapters';
import Wrapper from '../_component/global/SmoothScroll';
import { FC } from 'react';
import content from '@/app/_api/tableofcontent.json'
import Cross from '../_component/tableofcontent/Cross';

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
    <>
      <Cross/>
      <Wrapper>
        {createPreface(content)}
        {createChapters(content)}
      </Wrapper>
    </>
  );
}

export default TableOfContent;
