import Image, { StaticImageData } from 'next/image'
import cross from '@/public/cross.svg'

interface CrossProps {
  icon? : string[] | StaticImageData[]
}

export default function Cross({ icon = [cross, cross] } : CrossProps){
  const renderCross = (index : number) => (
    <div className={`fixed ${index === 0 ? 'left-20 translate-x-1/2' : 'right-20 -translate-x-1/2'} top-1/2`} key={index}>
      <Image src={icon[index]} alt="Cross graphic element" />
    </div>
  );

  return(
    <>
      {
        [0,1].map((index) => renderCross(index))
      }
    </>
  )
}