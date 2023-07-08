"use client"
import { useRef, useEffect } from "react";
import Content from "./Content";
import content from '@/app/_api/about.json';

const Minimap: React.FC = () => {
  const minimap = useRef<HTMLDivElement>(null);
  const minimapSize = useRef<HTMLDivElement>(null);
  const viewer = useRef<HTMLDivElement>(null);
  const minimapContent = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.06;
    let realScale: number;

    function getDimensions() {
      const bodyWidth = document.body.clientWidth;
      const bodyRatio = document.body.clientHeight / bodyWidth;
      const winRatio = window.innerHeight / window.innerWidth;

      if (minimap.current) {
        minimap.current.style.width = "20%";
      }

      if(minimap.current){
        realScale = minimap.current.clientWidth / bodyWidth;
      }

      if (minimapSize.current) {
        minimapSize.current.style.paddingTop = `${bodyRatio * 100}%`;
      }
      if (viewer.current) {
        viewer.current.style.paddingTop = `${winRatio * 100}%`;
      }
      if (minimapContent.current) {
        minimapContent.current.style.transform = `scale(${realScale})`;
        minimapContent.current.style.width = `${(100 / realScale)}%`;
        minimapContent.current.style.height = `${(100 / realScale)}%`;
      }
    }

    function lerp(start: number, end: number, t: number) {
      return start * (1 - t) + end * t;
    }

    function trackScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(5));
      target = window.scrollY;
      if (viewer.current) {
        viewer.current.style.transform = `translateY(${current * realScale}px)`;
      }
      if (minimap.current) {
        minimap.current.style.transform = `translateY(-${
          (current * realScale) / 1.5
        }px)`;
      }
      requestAnimationFrame(trackScroll);
    }

    getDimensions();
    trackScroll();
    window.addEventListener("resize", getDimensions);

    return () => {
      window.removeEventListener("resize", getDimensions);
    };
  }, []);

  return (
    <div ref ={minimap} className="w-80 top-60 left-20 z-20 fixed hidden lg:block">
      <div ref={minimapSize} className="relative z-10"></div>
      <div ref={viewer} className="absolute w-full top-0 left-0 origin-top-left z-20 border-1/2 border-neutral-800"></div>
      <div ref={minimapContent} className="absolute top-0 left-10 w-full h-full z-[-1] origin-top-left">
        <Content content={content} />
      </div>
    </div>
  );
}

export default Minimap