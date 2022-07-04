import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 250 }}
      transition={{ type: "tween", duration: 0.2 }}
      exit={{ width: 0 }}
      onClick={(e) => e.stopPropagation()}
      className=" h-full absolute z-10 shadow-3xl bg-white right-0 rounded-tr-3xl rounded-br-3xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0, delay: 0.15 } }}
        exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Container;
