import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

type DescriptionProps = {
  number: string;
  paragraph: string;
};

type CoverImageProps = {
  projectName: string;
  headline: string;
  link: string;
  source: string | StaticImageData;
  alt: string;
};

type ImagePreview = {
  source: string | StaticImageData;
  alt: string;
};

type ProjectContent = {
  cover: CoverImageProps;
  description: DescriptionProps;
  preview : ImagePreview[];
};

type ProjectProps = {
  content: ProjectContent;
};

function ProjectCoverImage({
  projectName,
  headline,
  link,
  source,
  alt,
}: CoverImageProps) {
  return (
    <div className="coverimage w-full h-full relative col-span-2">
      <div className="absolute text-center text-white font-normal top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-8 left-1/2 -translate-x-1/2">
        <h2 className="text-3xl font-sans">{projectName}</h2>
        <h1 className="text-6xl font-serif flex flex-col gap-2 leading-tight">{headline}</h1>
        <Link href={link} className="border border-white rounded-lg px-8 py-3 italic flex gap-2 justify-center items-center text-lg">
          Visit Project <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      <Image src={source} alt={alt} width={1280} height={1920} className="aspect-video w-full h-auto brightness-75" />
    </div>
  );
}

function ProjectDescription({ number, paragraph }: DescriptionProps) {
  return (
    <div className="description w-full px-20  col-start-2">
      <div className="text-2xl flex gap-10">
        <h2 className="text-gray-400 text-xl">{number}</h2>
        <p className="pl-20 -indent-20 tracking-wide text-justify">{paragraph}</p>
      </div>
    </div>
  );
}

function ProjectPreview({ images }: {images : ImagePreview[]}) {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className={`w-full px-20 h-full col-start-${index % 2 === 0 ? 2 : 1} uppercase flex flex-col gap-10`}>
          <Image src={image.source} alt={image.alt} width={1280} height={720} className='aspect-video w-full h-auto'/>
        </div>
      ))}
    </>
  );
}




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
