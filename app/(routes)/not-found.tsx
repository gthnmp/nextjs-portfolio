"use client";
import Link from 'next/link' 
export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center  gap-2 z-[60] bg-neutral-800'>
      <h1 className='text-3xl'>Not Found</h1>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  )
}