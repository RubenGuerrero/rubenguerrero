import { boxMotionProps } from './styles.props';
import { motion } from 'framer-motion';
import { VscLoading } from 'react-icons/vsc';

export const Loading = () => {
  return (
    <motion.div
      {...boxMotionProps}
      className="flex w-full animate-pulse items-center justify-center"
    >
      <div className="p-4">
        <VscLoading className="animate-spin" size={24} />
      </div>
    </motion.div>
  );
};
