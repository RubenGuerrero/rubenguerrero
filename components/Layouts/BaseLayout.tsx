import { PropsWithChildren } from 'react';

const BaseLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default BaseLayout;
