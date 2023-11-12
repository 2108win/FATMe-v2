"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full sticky top-4 z-50 px-4 transition-all duration-300">
      <div className="navbar border border-neutral-content shadow-md bg-base-100 max-w-6xl mx-auto rounded-box">
        <div className="navbar-start">
          <Logo />
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
          <div
            tabIndex={0}
            className="dropdown dropdown-hover dropdown-bottom dropdown-end md:hidden"
          >
            <label tabIndex={0} className="btn btn-ghost m-1">
              <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md border border-neutral-content dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            >
              <li>
                <Link href="/" className="link no-underline text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link no-underline text-lg">
                  Blog
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href="/blog" className="link no-underline text-lg">
                      Blog 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="link no-underline text-lg">
                      Blog 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="link no-underline text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal space-x-1 hidden md:flex">
            <li>
              <Link href="/" className="link no-underline text-lg">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/blog" className="link no-underline text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link no-underline text-lg">
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
