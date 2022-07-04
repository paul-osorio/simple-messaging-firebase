import { motion } from "framer-motion";
type BackdropProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Backdrop = ({ onClose, children }: BackdropProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      onClick={onClose}
      className="bg-black/30 laptop:rounded-3xl w-full h-full absolute z-10"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
