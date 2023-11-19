import HeadingText from "@/components/HeadingText";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="px-4">
      <div className="container card rounded-badge border border-neutral-content/10 hover:border-neutral-content/50 bg-base-200 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center justify-items-center">
        <HeadingText
        className="max-w-[400px]"
          bigTitle="Nhận thông báo mới nhất"
          description="Nhập gmail để không bỏ lỡ những thông báo mới nhất và các ưu đãi hấp dẫn đến từ FATMee nhé !!!"
        />
        <div className="join justify-center">
          <input type="text" placeholder="Nhập gmail của bạn" className="input input-bordered join-item" />
          <button className="btn btn-outline border-opacity-50 join-item md:w-fit">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
