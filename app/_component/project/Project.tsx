import React from 'react';
import ProjectCoverImage, { ProjectCoverImageProps } from './ProjectCoverImage';
import ProjectDescription, { DescriptionProps } from './ProjectDescription';
import ProjectPreview, {ImagePreview} from './ProjectPreview';

type ProjectContent = {
  cover: ProjectCoverImageProps;
  description: DescriptionProps;
  preview : ImagePreview[];
};

type ProjectProps = {
  content: ProjectContent;
};

const Project: React.FC<ProjectProps> = ({ content }) => {
  const { cover, description, preview } = content;
  console.log(typeof preview)
  return (
    <section className="grid grid-cols-2 auto-rows-max gap-y-10 pb-96">
      <ProjectCoverImage {...cover} />
      <ProjectDescription {...description} />
      <ProjectPreview images={preview} />
    </section>
  );
};

export default Project;
