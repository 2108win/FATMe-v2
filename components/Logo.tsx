import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="btn btn-ghost text-xl normal-case">
      <Image src="/images/logo.png" alt="logo-fatme" width={40} height={40} />
      <span className="font-rubik font-bold tracking-[3px] text-warning">
        FATME
      </span>
    </Link>
  );
};

export default Logo;
