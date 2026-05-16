import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionTransition({ children, className = "", id }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        scale: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
