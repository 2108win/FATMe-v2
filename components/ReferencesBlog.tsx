"use client";

import React from "react";
import CardBlog from "./CardBlog";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardData = [
  {
    blogId: 1,
    slug: "blog-name-1",
    image: "/images/img-creator-win.jpg",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer"],
  },
  {
    blogId: 2,
    slug: "blog-name-2",
    image: "/images/img-delivery.png",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer"],
  },
  {
    blogId: 3,
    slug: "blog-name-3",
    image: "/images/img-restaurant.png",
    title: "Lã Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer", "FE Developer"],
  },
  {
    blogId: 4,
    slug: "blog-name-4",
    image: "/images/img-who.png",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer", "Frontend Developer", "Designer"],
  },
];

const ReferencesBlog = () => {
  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 2000,
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
    <div className="max-w-6xl">
      <Swiper
        {...swiperParams}
        modules={[Scrollbar, Autoplay, Navigation, Pagination]}
        className="!p-10 !pt-0"
      >
        {cardData.map((item, index) => (
          <SwiperSlide key={index}>
            <CardBlog {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReferencesBlog;
