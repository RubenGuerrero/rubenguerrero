import { boxMotionProps } from './styles.props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { FC, useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { VscLoading } from 'react-icons/vsc';

export const NotLoggedUser: FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async () => {
    setLoading(true);
    await signIn('github');
  }, []);

  return (
    <motion.div {...boxMotionProps}>
      <button
        onClick={handleSignIn}
        className={clsx(
          'pointer hover:neutral-900 flex w-full items-center justify-center rounded-md bg-zinc-900 p-4 text-left transition-colors',
          {
            'animate-pulse bg-zinc-800': loading,
          }
        )}
      >
        {loading ? (
          <VscLoading className="mr-4 animate-spin" size={32} />
        ) : (
          <FaGithub size={32} className="mr-4" />
        )}
        Sign in with Github
      </button>
    </motion.div>
  );
};
