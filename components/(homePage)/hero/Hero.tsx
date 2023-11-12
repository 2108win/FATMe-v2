"use client";

import Image from "next/image";
import HeadingText from "../../HeadingText";
import { useRef, useState } from "react";
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playVideo = () => {
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      return;
    }
    if (!isPlaying && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      return;
    }
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col gap-10">
        <HeadingText
          smallTitle="Chúng tôi"
          bigTitle="Food At The Moment everytime"
          description="Chúng tôi là công ty cung cấp dịch vụ vận chuyển thức ăn chuyên nghiệp với nhiều thương hiệu nổi tiếng."
        />
        <button
          onClick={playVideo}
          className="btn btn-outline rounded-btn md:w-fit hover:border-primary hover:text-primary"
        >
          {isPlaying ? (
            <span className="flex gap-2 items-center">
              <Image src="/icons/pause.svg" alt="icon-pause" width={20} height={20} />
              Pause video
            </span>
          ) : (
            <span className="flex gap-2 items-center">
              <Image src="/icons/play.svg" alt="icon-play" width={20} height={20} />
              Play video
            </span>
          )}
        </button>
      </div>
      <div className="relative flex justify-center items-center aspect-video rounded-box overflow-hidden z-0 group">
        <video ref={videoRef} controls className="w-full h-auto" poster="/images/poster-video.png">
          <source src="/videos/videofatme.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          onClick={playVideo}
          className="absolute hidden group-hover:flex items-center justify-center btn btn-circle"
        >
          {isPlaying ? (
            <Image src="/icons/pause.svg" alt="icon-pause" width={30} height={30} />
          ) : (
            <Image src="/icons/play.svg" alt="icon-play" width={30} height={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
