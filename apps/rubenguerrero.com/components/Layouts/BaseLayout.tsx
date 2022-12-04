import { PropsWithChildren } from 'react';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const BaseLayout = ({ children }: PropsWithChildren<{}>) => {
  return <main className={`${inter.variable} font-sans`}>{children}</main>;
};

export default BaseLayout;
