"use client";

import HeadingText from "@/components/HeadingText";
import React from "react";

import CardBlog from "./CardBlog";
import Link from "next/link";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardData = [
  {
    blogId: 1,
    rootLink: "blog/",
    slug: "blog-name-1",
    image: "/images/img-creator-win.jpg",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer"],
  },
  {
    blogId: 2,
    rootLink: "blog/",
    slug: "blog-name-2",
    image: "/images/img-delivery.png",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer"],
  },
  {
    blogId: 3,
    rootLink: "blog/",
    slug: "blog-name-3",
    image: "/images/img-restaurant.png",
    title: "Lã Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer", "FE Developer"],
  },
  {
    blogId: 4,
    rootLink: "blog/",
    slug: "blog-name-4",
    image: "/images/img-who.png",
    title: "Lã Mai Win",
    description: "19522550",
    badge: "Founder",
    categories: ["Web Developer", "Frontend Developer", "Designer"],
  },
];

const Blog = () => {
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
      el: '.swiper-scrollbar',
    },
  };

  return (
    <div className="container flex flex-col gap-10">
      <HeadingText
        className="items-center text-center sm"
        smallTitle="Tin tức"
        bigTitle="Các Blog mới nhất từ FatMe"
        description="Tin tức mới nhất về FatMe"
      />

      <div className="max-w-6xl">
        <Swiper {...swiperParams} modules={[Scrollbar, Autoplay, Navigation, Pagination]} className="!p-10 !pt-0">
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <CardBlog {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
