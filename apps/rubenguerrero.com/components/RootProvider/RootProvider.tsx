import { createClient, JitsuProvider } from '@jitsu/nextjs';
import { usePageView } from '@jitsu/nextjs';
import { config } from 'lib/config';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export const jitsuClient = createClient({
  tracking_host: config.TRACKING_HOST,
  key: config.TRACKING_KEY,
});
export const RootProvider = ({ children, session }: PropsWithChildren<{ session: Session }>) => {
  usePageView(jitsuClient);

  return (
    <SessionProvider session={session}>
      <JitsuProvider client={jitsuClient}>{children}</JitsuProvider>
    </SessionProvider>
  );
};
