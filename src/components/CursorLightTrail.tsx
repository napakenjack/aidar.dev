import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

export function CursorLightTrail() {
  const [isHovering, setIsHovering] = useState(false);

  // Instantaneous motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  useEffect(() => {
    const defaultCursor = document.body.style.cursor;
    
    // Use requestAnimationFrame for smoother but instant updates 
    let rafId: number;
    let targetX = -100;
    let targetY = -100;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Update primary dot immediately
      cursorX.set(targetX - 6);
      cursorY.set(targetY - 6);
      
      // Update trail smoothly but quickly via native lerping
      // Actually we just set it instantly since user requested 'обычная скорость'
      trailX.set(targetX - 150);
      trailY.set(targetY - 150);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = defaultCursor;
    };
  }, [cursorX, cursorY, trailX, trailY]);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[12px] h-[12px] rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
        animate={{ scale: isHovering ? 2 : 1 }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          background: "radial-gradient(circle, rgba(0, 100, 255, 0.15) 0%, rgba(0, 50, 150, 0.05) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
