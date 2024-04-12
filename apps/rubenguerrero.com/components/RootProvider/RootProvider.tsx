import { AnalyticsPageView } from './AnalyticsPageView';
import { JitsuProvider } from '@jitsu/jitsu-react';
import { config } from 'lib/config';
import { PropsWithChildren } from 'react';

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <JitsuProvider options={{ host: config.TRACKING_HOST, writeKey: config.TRACKING_KEY }}>
      {children}
      <AnalyticsPageView />
    </JitsuProvider>
  );
};
