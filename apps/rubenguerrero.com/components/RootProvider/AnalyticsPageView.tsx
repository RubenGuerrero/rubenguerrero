import { useJitsu } from '@jitsu/jitsu-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function AnalyticsPageView() {
  const { analytics } = useJitsu();
  const router = useRouter();
  useEffect(() => {
    analytics.page();
  }, [router.asPath]);

  return null;
}
