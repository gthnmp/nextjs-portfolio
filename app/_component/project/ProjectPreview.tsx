import Image, { StaticImageData } from 'next/image';

export type ImagePreview = {
  source: string | StaticImageData;
  alt: string;
};

export default function ProjectPreview({ images }: {images : ImagePreview[]}) {
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
