import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image, {StaticImageData} from "next/image";

export type ProjectCoverImageProps = {
  projectName: string;
  headline: string;
  link: string;
  source: string | StaticImageData;
  alt: string;
};

export default function ProjectCoverImage({
  projectName,
  headline,
  link,
  source,
  alt,
}: ProjectCoverImageProps) {
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