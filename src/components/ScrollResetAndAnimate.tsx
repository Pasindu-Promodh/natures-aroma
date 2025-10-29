import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ScrollResetAndAnimate = ({
  children,
  motionKey,
}: {
  children: React.ReactNode;
  motionKey: string;
}) => {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Reset scroll instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Wait until scroll reset before rendering content
    setReady(true);
  }, [pathname]);

  if (!ready) return null;

  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }} // no vertical offset
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollResetAndAnimate;
