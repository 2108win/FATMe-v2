"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FormComment = () => {
  const { data: session }: any = useSession();

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="input input-bordered input-disabled w-full"
          value="You need login to comment!!"
          readOnly
        />
        <Link
          href="/login"
          className="btn bg-primary text-lg text-white no-underline"
        >
          Sign In
        </Link>
      </div>
    );
  }
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={"/images/img-creator-win.jpg"}
          alt="avatar"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-end gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div className="flex gap-2">
          <button className="btn btn-ghost normal-case">Cancel</button>
          <button className="btn  normal-case">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default FormComment;
