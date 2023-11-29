"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { CircleUserRound } from "lucide-react";

const UserButton = () => {
  const { data: session }: any = useSession();
  if (!session)
    return (
      <>
        <Link
          href="/login"
          className="link bg-primary text-lg text-white no-underline"
        >
          Sign In
        </Link>
        <Link href="/register" className="link text-lg no-underline">
          Sign Up
        </Link>
      </>
    );

  return (
    <>
      <div
        tabIndex={0}
        className="dropdown dropdown-end dropdown-bottom dropdown-hover hidden md:block"
      >
        <label tabIndex={0} className="flex items-center normal-case">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name ?? ""}
              height={30}
              width={30}
              className="rounded-full"
            />
          ) : (
            <CircleUserRound className="text-xl" />
          )}
          <span className="link ml-2 text-lg no-underline">
            {session.user.name || session.user.email || ""}
          </span>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-20 w-40 border border-neutral-content/50 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href="/manage/user" className="link text-lg no-underline">
              Manage user
            </Link>
          </li>
          <li>
            <Link href="/manage/blog" className="link text-lg no-underline">
              Manage blog
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                signOut();
              }}
              className="link text-lg no-underline"
            >
              Sign out
            </div>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name ?? ""}
            height={30}
            width={30}
            className="rounded-full"
          />
        ) : (
          <CircleUserRound className="text-xl" />
        )}
        <span className="ml-2 text-lg">
          {session.user.name || session.user.email || ""}
        </span>
      </div>
      <ul className="p-2 md:hidden">
        <li>
          <Link href="/manage/user" className="link text-lg no-underline">
            Manage user
          </Link>
        </li>
        <li>
          <Link href="/manage/blog" className="link text-lg no-underline">
            Manage blog
          </Link>
        </li>
        <li>
          <div
            onClick={() => {
              signOut();
            }}
            className="link text-lg no-underline"
          >
            Sign out
          </div>
        </li>
      </ul>
    </>
  );
};

export default UserButton;
