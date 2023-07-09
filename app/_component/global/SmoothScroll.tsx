"use client";
import React, { useEffect, useRef } from "react";

type WrapperProps = {
  children: any;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let ease = 0.075;

    const maxHeight = 3000;

    function lerp(start: number, end: number, t: number) {
      return start * (1 - t) + end * t;
    }

    function setTransform(element: HTMLElement | null, change: string) {
      if (element) {
        element.style.transform = change;
      }
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));
      setTransform(ref.current, `translate3d(0, ${-current}px,0)`);
      requestAnimationFrame(smoothScroll);
    }
    
    function updateBodyHeight() {
      const containerHeight = ref.current?.getBoundingClientRect().height;
      const containerWidth = ref.current?.getBoundingClientRect().width;
      document.body.style.height = `${containerHeight}px`;
      document.body.style.width = `${containerWidth}px`;
      ease = containerWidth! > 768 ? 0.075 : 1;
    }

    function handleResize() {
      updateBodyHeight();
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

    function handleTouchStart(event: TouchEvent) {
      isDragging.current = true;
      startY.current = event.touches[0].clientY;
    }

    function handleTouchMove(event: TouchEvent) {
      if (!isDragging.current) return;
      const deltaY = (event.touches[0].clientY - startY.current!) * 3;
      target = Math.min(maxHeight, Math.max(0, target - deltaY));
      startY.current = event.touches[0].clientY;
    }

    function handleTouchEnd() {
      isDragging.current = false;
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      target = Math.min(maxHeight, Math.max(0, target + event.deltaY * 1));
    }

    handleResize();
    smoothScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed will-change-transform overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
