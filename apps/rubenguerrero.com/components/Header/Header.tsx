import { Logo } from 'components/Logo';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <>
      <div className="relative border-b border-gray-200 px-4 pb-4 pt-4 sm:px-6 md:border-b-0 md:pb-0 md:pt-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
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
