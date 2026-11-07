"use client";
import { motion, useReducedMotion } from "framer-motion";
import Terminal from "./Terminal";

export default function Portrait() {
  const reduce = useReducedMotion();
  return (
    <div className="portrait-box">
      <motion.div
        className="portrait-frame"
        initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="portrait-img"
          animate={reduce ? undefined : { y: [0, -8, 0], boxShadow: ["12px 12px 0 #D4FF3A", "16px 18px 0 #D4FF3A", "12px 12px 0 #D4FF3A"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ rotate: -1.5, scale: 1.015 }}
        >
          <img src="/assets/thushar-portrait-900.jpg" alt="Thushar Reddy Vemula smiling in a light blue shirt" width={900} height={900} fetchPriority="high" />
        </motion.div>
        <span className="spark s1" aria-hidden="true" />
        <span className="spark s2" aria-hidden="true" />
        <span className="spark s3" aria-hidden="true" />
      </motion.div>
      <motion.div
        className="term-wrap"
        initial={{ opacity: 0, y: 24 }}
        animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 6, 0] }}
        transition={reduce ? { duration: 0.4 } : { opacity: { delay: 0.5, duration: 0.5 }, y: { delay: 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      >
        <Terminal />
      </motion.div>
    </div>
  );
}
