import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CursorLightTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor position
  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  
  // Slower spring for the trailing glow
  const trailConfig = { damping: 40, stiffness: 100, mass: 1.5 };
  const trailX = useSpring(-100, trailConfig);
  const trailY = useSpring(-100, trailConfig);

  useEffect(() => {
    const defaultCursor = document.body.style.cursor;
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 1);
      cursorY.set(e.clientY - 1);
      trailX.set(e.clientX - 150);
      trailY.set(e.clientY - 150);
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
      {/* Primary sharp dot */}
      <motion.div
        className="fixed top-0 left-0 w-[12px] h-[12px] rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
      />
      
      {/* Navy blue atmospheric glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          background: "radial-gradient(circle, rgba(0, 100, 255, 0.15) 0%, rgba(0, 50, 150, 0.05) 40%, transparent 70%)",
          filter: "blur(20px)",
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  );
}
