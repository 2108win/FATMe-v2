"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-base-100 shadow-md md:shadow-none sticky top-0">
      <div className="navbar bg-base-100 max-w-6xl mx-auto">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src="/images/logo.png" alt="logo-fatme" width={40} height={40} />
            <span className="font-medium text-primary tracking-[3px]">FATME</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            >
              <li>
                <Link href="/" className="text-lg hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg hover:text-primary">
                  Blog
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href="/blog" className="text-lg hover:text-primary">
                      Blog 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-lg hover:text-primary">
                      Blog 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="text-lg hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li>
              <Link href="/" className="text-lg hover:text-primary">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/blog" className="text-lg hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="text-lg hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
