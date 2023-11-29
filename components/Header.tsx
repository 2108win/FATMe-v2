import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import UserButton from "./UserButton";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div className="sticky top-4 z-50 w-full px-4 transition-all duration-300">
      <div className="navbar rounded-box mx-auto max-w-6xl border border-neutral-content/50 bg-base-100/70 shadow-md backdrop-blur-md">
        <div className="justify-start">
          <Logo />
        </div>
        <div className="ml-auto justify-end">
          <ThemeSwitcher />
          <div className="dropdown dropdown-end dropdown-bottom dropdown-hover md:hidden">
            <label tabIndex={0} className="btn btn-ghost m-1">
              <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
            </label>
            <ul className="menu dropdown-content rounded-box menu-md z-[1] w-64 border border-neutral-content/50 bg-base-100 p-2 shadow">
              <li>
                <Link href="/" className="link text-lg no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link text-lg no-underline">
                  Blog
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href="/blog/1" className="link text-lg no-underline">
                      Blog 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/2" className="link text-lg no-underline">
                      Blog 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="link text-lg no-underline">
                  Contact
                </Link>
              </li>
              <li className="mt-2 gap-1 border-t border-neutral-content/50 pt-2">
                <UserButton />
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal hidden space-x-1 md:flex">
            <li>
              <Link href="/" className="link text-lg no-underline">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/blog" className="link text-lg no-underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link text-lg no-underline">
                Contact
              </Link>
            </li>
            <li className="flex-row items-center gap-1 border-l border-neutral-content/50 pl-1">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
