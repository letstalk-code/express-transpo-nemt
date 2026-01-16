"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({ children, className = "", padding = "md", hover = true }: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        transition={{ duration: 0.2 }}
        className={`bg-white rounded-xl shadow-sm border border-gray-100 ${paddings[padding]} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}
