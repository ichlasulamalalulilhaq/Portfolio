"use client";

import { motion, Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: AnimatedSectionProps) {
  // If stagger is true, we want to animate children sequentially.
  // We can do this with Framer Motion variants.
  if (stagger) {
    const container: Variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    };

    const item: Variants = {
      hidden: { opacity: 0, y: 30 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 15
        }
      },
    };

    // We need to map over children to apply the 'item' variant to them
    // Assuming children are an array of elements (like mapping over an array)
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className={className}
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={item}>{children}</motion.div>
        )}
      </motion.div>
    );
  }

  // Normal block fade-in animation
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
