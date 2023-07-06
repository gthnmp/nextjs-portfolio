import Link from "next/link"
import Socials from "../global/Socials"

export default function Navigation (){
  return(
  <nav className='nav-layout w-screen gap-x-10 px-10 font-normal text-base'>
    <h1 className='title font-semibold'>Projects</h1>
    <button className='grid-view flex'>Grid View</button>
    <button className='line-view flex'>Line View</button>
    <button className='list-view flex'>List View</button>
    <Link href={"/about"} className='to-about'>About</Link>
    <Socials className='socials flex justify-center items-center gap-4'/>
  </nav>

  )
}