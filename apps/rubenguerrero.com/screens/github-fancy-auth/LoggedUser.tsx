import { boxMotionProps } from './styles.props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { DefaultSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { FC, useCallback, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { VscLoading } from 'react-icons/vsc';

interface LoggedUserProps {
  user?: DefaultSession['user'];
}

export const LoggedUser: FC<LoggedUserProps> = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    await signOut({
      redirect: false,
    });
    setLoading(false);
  }, []);

  return (
    <motion.div {...boxMotionProps} className="flex flex-col items-center">
      <div>{!!user?.image && <img src={user.image} className="h-32 w-32 rounded-full" />}</div>
      <div className="mt-2 font-bold">{user?.name}</div>
      <div className="mb-6 text-gray-400">{user?.email}</div>
      <button
        onClick={handleSignOut}
        className={clsx(
          'pointer flex w-full items-center justify-center rounded-md bg-gray-700 p-3 transition-colors hover:bg-gray-600',
          {
            'animate-pulse': loading,
          }
        )}
      >
        {loading ? (
          <VscLoading className="mr-4 animate-spin" size={24} />
        ) : (
          <AiOutlineLogout className="mr-4" size={24} />
        )}
        Sign out
      </button>
    </motion.div>
  );
};
