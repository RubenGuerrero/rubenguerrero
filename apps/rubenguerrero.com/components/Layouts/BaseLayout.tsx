import { PropsWithChildren } from 'react';

const BaseLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <main className="min-h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </main>
  );
};

export default BaseLayout;
