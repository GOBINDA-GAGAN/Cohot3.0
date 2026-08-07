import { motion } from "framer-motion";

export default function PageTransition({ children }) {
    return (
   <motion.div
      initial={{
        scaleX: 0.9,
        scaleY: 1.2,
        borderRadius: "40% 60% 55% 45%",
        filter: "blur(20px)",
        opacity: 0,
      }}
      animate={{
        scaleX: 1,
        scaleY: 1,
        borderRadius: "0%",
        filter: "blur(0px)",
        opacity: 1,
      }}
      exit={{
        scaleX: 1.1,
        scaleY: 0.8,
        borderRadius: "60% 40% 45% 55%",
        filter: "blur(20px)",
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
    );
}