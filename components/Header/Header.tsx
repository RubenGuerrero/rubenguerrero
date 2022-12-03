import Link from 'next/link';

import { Logo } from 'components/Logo';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <>
      <div className="relative pb-4 pt-4 px-4 border-b border-gray-200 sm:px-6 md:pb-0 md:pt-6 md:border-b-0 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex flex-grow flex-shrink-0 items-center lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
