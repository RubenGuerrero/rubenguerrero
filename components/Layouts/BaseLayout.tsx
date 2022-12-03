import { PropsWithChildren } from 'react';

const BaseLayout = ({ children }: PropsWithChildren<{}>) => {
  return <>{children}</>
};

export default BaseLayout;
