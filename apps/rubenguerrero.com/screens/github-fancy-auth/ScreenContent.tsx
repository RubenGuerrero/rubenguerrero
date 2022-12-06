import { Loading } from './Loading';
import { LoggedUser } from './LoggedUser';
import { NotLoggedUser } from './NotLoggedUser';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';

export const ScreenContent = () => {
  const { data: session, status } = useSession();

  const user = session?.user;

  const logged = !!user;
  const loading = status === 'loading';

  return (
    <AnimatePresence mode="wait">
      {loading && <Loading />}
      {!loading && !logged && <NotLoggedUser />}
      {logged && <LoggedUser user={user} />}
    </AnimatePresence>
  );
};
