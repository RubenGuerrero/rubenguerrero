import { parentMotionProps } from './styles.props';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

export const ParentBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      {...parentMotionProps}
      className="m-auto w-full max-w-[420px] overflow-hidden rounded-lg bg-gray-800 p-6 drop-shadow-xl"
    >
      {children}
    </motion.div>
  );
};
