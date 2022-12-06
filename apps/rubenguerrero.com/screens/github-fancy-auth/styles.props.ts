export const boxMotionProps = {
  variants: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  },
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const parentMotionProps = {
  variants: {
    initial: { opacity: 0, translateY: -30 },
    animate: { opacity: 1, translateY: 0 },
    exit: { opacity: 0 },
  },
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};
