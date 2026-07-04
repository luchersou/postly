import { Variants } from "framer-motion";

export const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

export const tagVariants: Variants = {
  inactive: { opacity: 0.4 },
  active: { opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};