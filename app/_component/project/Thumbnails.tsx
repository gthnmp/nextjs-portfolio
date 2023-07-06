import Image, { StaticImageData } from "next/image";

const Thumbnails = ({ src } : {src? : string | StaticImageData}) => {
  const thumbnails = [];
  
  for (let i = 1; i <= 13; i++) {
    const imageId = Math.floor(Math.random() * 10) + 1;
    thumbnails.push(
      <Image src={`/assets/projects/${imageId}.jpg`} alt="Project Thumbnail" width={1920} height={2400} className={`thumbnail th-${i} w-full h-full object-cover`}/>
    );
  }
  return <>{thumbnails}</>;
};

export default Thumbnails