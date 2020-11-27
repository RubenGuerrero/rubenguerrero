import Link from 'next/link';

import { Logo } from 'components/Logo';

const Header = () => {
  return (
    <>
      <div className="relative px-4 pt-4 pb-4 border-b border-gray-200 md:pb-0 md:pt-6 sm:px-6 lg:px-8 md:border-b-0">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a aria-label="Home">
                  <Logo />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
