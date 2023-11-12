import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="btn btn-ghost normal-case text-xl">
      <Image src="/images/logo.png" alt="logo-fatme" width={40} height={40} />
      <span className="font-bold text-primary tracking-[3px] font-rubik">FATME</span>
    </Link>
  );
};

export default Logo;
