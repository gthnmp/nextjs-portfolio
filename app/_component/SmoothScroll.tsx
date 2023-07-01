"use client"
import React, { ReactNode, useEffect, useRef } from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  const ref = useRef(null);
  useEffect(() => {
    let current = 0;
    let target = 0;
    let ease = 0.9;

    function lerp(start : number, end:number, t:number){
      return (start * ( (1 - t)) + end * t);
    }
    
    function setTransform(element:React.ReactNode, change:string) {
      element.style.transform = change;
    }

    function smoothScroll(){
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));
      target = window.scrollY;
      setTransform(ref.current, `translate3d(0, ${-current}px,0)`);
      requestAnimationFrame(smoothScroll);
    }

    
    function updateBodyHeight() {
      const contentHeight = ref.current.getBoundingClientRect().height;
      const contentWidth = ref.current.getBoundingClientRect().width;
      document.body.style.height = `${contentHeight}px`;
      document.body.style.width = `${contentWidth}px`;
      ease = contentWidth > 768 ? 0.06 : 1;
    }

    function handleResize() {
      updateBodyHeight();
    }

    handleResize();
    smoothScroll();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    // Your code here
  }, []);

  return <div ref = {ref} className={`fixed will-change-transform overflow-x-hidden ${className}`}>{children}</div>;
};

export default Wrapper;
