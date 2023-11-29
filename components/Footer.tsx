import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const footerData = [
  {
    title: "Blog",
    items: [
      {
        name: "Tin tức",
        link: "#",
      },
      {
        name: "Tin tức mới nhất",
        link: "#",
      },
    ],
  },
  {
    title: "Liên hệ",
    items: [
      {
        name: "dangcapcuawin@gmail.com",
        link: "mailto:dangcapcuawin@gmail.com",
      },
      {
        name: "(+84) 971 292 838",
        link: "tel:+84971292838",
      },
      {
        name: "Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-16 w-full bg-base-300 text-base-content">
      <footer className="container footer">
        <aside>
          <Logo />
          <p className="max-w-[400px] px-4 py-2">
            Yêu là phải nói, đói là phải ăn, gọi FATMee thật nhanh, giao tận tay
            khách
          </p>
        </aside>
        {footerData.map((item, index) => (
          <div className="mx-4" key={index}>
            <h4 className="footer-title">{item.title}</h4>
            {item.items.map((subItem, index) =>
              subItem.link ? (
                <Link
                  key={index}
                  className="link-hover link"
                  href={subItem.link}
                >
                  {subItem.name}
                </Link>
              ) : (
                <span key={index}>{subItem.name}</span>
              ),
            )}
          </div>
        ))}
      </footer>
      <footer className="footer footer-center bg-base-content p-10 text-base-100">
        <aside>
          <Image
            src="/images/logo.png"
            alt="logo-fatme"
            width={100}
            height={100}
          />
          <p>Copyright by WinLax © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com/2108win/">
              <svg
                height="30px"
                width="30px"
                className="fill-current hover:fill-primary"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
	v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
	c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
                />
              </svg>
            </Link>
            <Link href="https://www.instagram/win_lax/">
              <svg
                height="30px"
                width="30px"
                className="fill-current hover:fill-primary"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g>
                  <path
                    d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
		c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"
                  />
                  <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	" />
                  <path
                    d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
		c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"
                  />
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8
		c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
		c27.3,0,49.5,22.2,49.5,49.5V374.7z"
                  />
                </g>
              </svg>
            </Link>
            <Link href="https://www.github.com/2108win/">
              <svg
                height="30px"
                width="30px"
                className="fill-current hover:fill-primary"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z" />{" "}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M244.2,423.4 c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2 c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8 c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3 c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6 c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5C243,374.6,247.3,398.2,244.2,423.4z" />{" "}
                  </g>{" "}
                </g>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
