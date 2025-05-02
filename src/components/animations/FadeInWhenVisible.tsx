
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInWhenVisible = ({ children, delay = 0, className = '' }: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
