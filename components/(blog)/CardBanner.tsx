"use client";

import React from "react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingText from "../HeadingText";
import BigCardBlog from "../BigCardBlog";

// const cardData = [
//   {
//     blogId: 1,
//     image: "/images/blog/blog-banner.jpg",
//     title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
//     description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
//     badge: "Newest",
//     categories: ["Must Try"],
//     linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
//   },
//   {
//     blogId: 2,
//     image: "/images/img-delivery.png",
//     title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
//     description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
//     badge: "Newest",
//     categories: ["Must "],
//     linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
//   },
//   {
//     blogId: 3,
//     image: "/images/img-restaurant.png",
//     title: "Lã Win",
//     description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
//     badge: "Newest",
//     categories: ["Must ", "FE Developer"],
//     linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
//   },
//   {
//     blogId: 4,
//     image: "/images/img-who.png",
//     title: "Những món ăn nhất định phải thử trong đời đỉnh cao của ẩm thực",
//     description: "Link: https://www.youtube.com/watch?v=Qq4j1LtCdww",
//     badge: "Newest",
//     categories: ["Must ", "Frontend Developer", "Designer"],
//     linkReference: "https://www.youtube.com/watch?v=Qq4j1LtCdww",
//   },
// ];
type CardBannerProps = {
  data: any;
};

const CardBanner = ({ data }: CardBannerProps) => {
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
          modules={[Scrollbar, Navigation, Pagination]}
          className="!p-10 !pt-0"
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <BigCardBlog
                blogId={item.blogId}
                slug={item.slug}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.categorySlug}
                badge="Newest"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardBanner;
