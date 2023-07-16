"use client"
import { useEffect, useRef, useState } from "react";
import Transition from "./transition";
import { preloadImages } from "../_component/preloader/utils";
import Revealer from '../_component/preloader/revealer'

export default  function Preloader() {
  const [ loadingInterval, setLoadingInterval ] = useState(1000)
  const [ loadingNumber, setLoadingNumber ] = useState(0);
  const [ loadingRate, setLoadingRate ] = useState(5)
  const loadingContainerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLHeadingElement>(null) 
  const maxLoadingNumber = 100;

  useEffect(() => {
    if(numberRef.current){
      numberRef.current.style.transform = 'translate3d(0, 0%, 0)';
    }
  }, []);

  useEffect(() => {
    preloadImages('.layers__item-img').then(() => {
      setLoadingInterval(50)
      setLoadingRate(10)
    })

    setTimeout(() => {
      const interval = setInterval(() => {
        setLoadingNumber((prevNumber) => {
          const randomIncrement = Math.floor(Math.random() * loadingRate) + 1;
          const nextNumber = prevNumber + randomIncrement;
          return nextNumber <= maxLoadingNumber ? nextNumber : maxLoadingNumber;
        });
      }, loadingInterval);
  
      return () => clearInterval(interval);
    }, 1000)
  }, [loadingInterval, loadingRate]);

  useEffect(() => {
    if (loadingNumber === maxLoadingNumber) {
      setTimeout(() => {
        if(numberRef.current){
          numberRef.current.style.transform = 'translateY(-100%)';
        }
      }, 1000);
    
      setTimeout(() => {
        const revealer = new Revealer();
        revealer.reveal();
      }, 1500);
      
      setTimeout(() => {
        if (loadingContainerRef.current){
          loadingContainerRef.current.style.zIndex = "-1"; 
        }
      }, 2500);
    }
  }, [loadingNumber]);

  return (
    <>
      <div id="preload" ref = {loadingContainerRef} className="fixed top-0 w-screen h-screen flex flex-col justify-center items-center z-50 dark:bg-neutral-900 bg-white  transition-all duration-1000 translate-y-0">
        <div id = "preload-number" className="overflow-hidden">
          <h1 ref = {numberRef} className="text-xl font-light transition-all duration-1000 translate-y-full">{loadingNumber}</h1>
        </div>
      </div>
      <Transition/>
    </>
  );
}
