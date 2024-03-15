import { JitsuProvider } from '@jitsu/jitsu-react';
import { config } from 'lib/config';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { AnalyticsPageView } from './AnalyticsPageView';


export const RootProvider = ({ children, session }: PropsWithChildren<{ session: Session }>) => {

  return (
    <SessionProvider session={session}>
      <JitsuProvider options={{ host: config.TRACKING_HOST, writeKey: config.TRACKING_KEY }}>{children}<AnalyticsPageView /></JitsuProvider>
    </SessionProvider>
  );
};
