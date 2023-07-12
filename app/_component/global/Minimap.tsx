"use client"
import { useRef, useEffect } from "react";
import Content from "../about/Content";
import content from '@/app/_api/homepage.json';

const Minimap: React.FC = () => {
  const minimap = useRef<HTMLDivElement>(null);
  const minimapSize = useRef<HTMLDivElement>(null);
  const viewer = useRef<HTMLDivElement>(null);
  const minimapContent = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.06;
    let realScale: number;
    const content = document.querySelector(".wrapper")
    const maxHeight = content?.getBoundingClientRect().height! * 0.80;

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

    function handleMouseDown(event: MouseEvent) {
      isDragging.current = true;
      startY.current = event.clientY;
    }

    function handleMouseMove(event: MouseEvent) {
      if (!isDragging.current) return;
      const deltaY = (event.clientY - startY.current!) * 3;
      target = Math.min(maxHeight, Math.max(0, target - deltaY));
      startY.current = event.clientY;
    }

    function handleMouseUp() {
      isDragging.current = false;
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      target = Math.min(maxHeight, Math.max(0, target + event.deltaY * 0.5));
    }

    getDimensions();
    trackScroll();
    window.addEventListener("resize", getDimensions);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", getDimensions);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const isServer = typeof window === 'undefined';
  if (!(isServer || window.innerWidth <= 768)){
      return (
        <div ref ={minimap} className="w-80 top-60 left-20 z-20 fixed hidden lg:block">
          <div ref={minimapSize} className="relative z-10"></div>
          <div ref={viewer} className="absolute w-full top-0 left-0 origin-center z-20 border-1/2 border-neutral-800 dark:border-neutral-500"></div>
          <div ref={minimapContent} className="absolute top-0 px-80 w-full h-full z-[-1] origin-top-left">
            <Content content={content} />
          </div>
        </div>
    );
  }
}
export default Minimap