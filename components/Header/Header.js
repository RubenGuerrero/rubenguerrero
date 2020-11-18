import { useCallback, useState } from 'react';
import cn from 'classnames';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from 'components/Logo';

const MenuItem = ({ href, className, activeClassName, children }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a
        className={cn(className, {
          [activeClassName]: pathname === href,
        })}
      >
        {children}
      </a>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsOpen(false);
  }, []);

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
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4">
            <MenuItem
              href="/resume"
              className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              activeClassName="text-gray-900"
            >
              Resume
            </MenuItem>
            <MenuItem
              href="/contact"
              className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              activeClassName="text-gray-900"
            >
              Contact
            </MenuItem>
          </div>
        </nav>
      </div>

      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md">
              <div
                className="overflow-hidden bg-white rounded-lg shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Logo textSize="text-4xl" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                      onClick={handleMenuClose}
                    >
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <MenuItem
                    href="/resume"
                    className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    activeClassName="text-gray-900"
                  >
                    Resume
                  </MenuItem>
                  <MenuItem
                    href="/contact"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    activeClassName="text-gray-900"
                  >
                    Contact
                  </MenuItem>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Header;
