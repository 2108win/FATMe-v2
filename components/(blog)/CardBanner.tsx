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
                className="group card h-full min-h-max w-fit cursor-pointer overflow-hidden border border-neutral-content/10 bg-base-100 shadow transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg md:flex-row md:items-center"
              >
                <figure className="rounded-box aspect-[3/2] overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="object-cover"
                  />
                </figure>
                <div className="card-body h-full min-h-[300px] basis-64 p-5 md:basis-4/5">
                  <div className="badge badge-warning badge-outline rounded-btn badge-lg p-3">
                    {item.badge}
                  </div>
                  <h2 className="truncate-3 card-title w-full items-start text-ellipsis pb-1 text-2xl font-bold transition-all group-hover:text-primary md:text-4xl">
                    {item.title}
                  </h2>
                  <Link
                    href={item.linkReference}
                    className="truncate-2 mt-auto hover:text-primary hover:underline md:mt-6"
                  >
                    {item.description}
                  </Link>
                  <div className="card-actions">
                    {/* list category */}
                    {item.categories &&
                      item.categories.map((category, index) => (
                        <span
                          key={index}
                          className="badge badge-warning badge-outline"
                        >
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
