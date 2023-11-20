import Image from "next/image";
import React from "react";

const FormComment = () => {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <Image
          src={"/images/img-creator-win.jpg"}
          alt="avatar"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-end gap-2 flex-1">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div className="flex gap-2">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn ">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default FormComment;