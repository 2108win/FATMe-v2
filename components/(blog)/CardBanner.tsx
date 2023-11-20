"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingText from "../HeadingText";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    blogId: 1,
    image: "/images/blog/blog-banner.jpg",
    title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
    description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
    badge: "Newest",
    categories: ["Must Try"],
    linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
  },
  {
    blogId: 2,
    image: "/images/img-delivery.png",
    title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
    description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
    badge: "Newest",
    categories: ["Must "],
    linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
  },
  {
    blogId: 3,
    image: "/images/img-restaurant.png",
    title: "Lã Win",
    description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
    badge: "Newest",
    categories: ["Must ", "FE Developer"],
    linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
  },
  {
    blogId: 4,
    image: "/images/img-who.png",
    title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
    description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
    badge: "Newest",
    categories: ["Must ", "Frontend Developer", "Designer"],
    linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
  },
];

const CardBanner = () => {
  const router = useRouter();
  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    // Responsive breakpoints
    autoplay: {
      delay: 15000,
      reverseDirection: true,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  };

  return (
    <div className="container flex flex-col gap-10">
      <HeadingText
        className="items-center text-center"
        bigTitle="Các bài blog được cập nhật thường xuyên của chúng tôi"
        description="Cập nhật mới nhất: 24 tháng 12 năm 2021"
      />
      <div className="max-w-6xl">
        <Swiper
          {...swiperParams}
          modules={[Scrollbar, Autoplay, Navigation, Pagination]}
          className="!p-10 !pt-0"
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => router.replace("/blog/" + item.blogId)}
                className="card border border-neutral-content/10 hover:border-neutral-content/50 w-fit h-full min-h-max bg-base-100 shadow hover:shadow-lg transition-all duration-500 group md:flex-row md:items-center overflow-hidden cursor-pointer"
              >
                <figure className="aspect-[3/2] shadow-md rounded-box overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="object-cover"
                  />
                </figure>
                <div className="card-body p-5 basis-64 md:basis-4/5 h-full min-h-[300px]">
                  <div className="badge badge-lg badge-accent bg-opacity-10 p-3 text-accent rounded-btn">
                    {item.badge}
                  </div>
                  <h2 className="card-title w-full text-2xl md:text-4xl font-bold group-hover:text-primary text-ellipsis items-start transition-all truncate-3 pb-1">
                    {item.title}
                  </h2>
                  <Link
                    href={item.linkReference}
                    className="mt-auto md:mt-6 truncate-2 hover:text-primary hover:underline"
                  >
                    {item.description}
                  </Link>
                  <div className="card-actions">
                    {/* list category */}
                    {item.categories &&
                      item.categories.map((category, index) => (
                        <span key={index} className="badge badge-outline">
                          {category}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardBanner;
