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
    <div className="container grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-10">
        <HeadingText
          smallTitle="Chúng tôi"
          bigTitle="Food At The Moment everytime"
          description="Chúng tôi là công ty cung cấp dịch vụ vận chuyển thức ăn chuyên nghiệp với nhiều thương hiệu nổi tiếng."
        />
        <button
          onClick={playVideo}
          className="btn btn-outline rounded-btn hover:border-primary hover:text-primary md:w-fit"
        >
          {isPlaying ? (
            <span className="flex items-center gap-2">
              <Image
                src="/icons/pause.svg"
                alt="icon-pause"
                width={20}
                height={20}
              />
              Pause video
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Image
                src="/icons/play.svg"
                alt="icon-play"
                width={20}
                height={20}
              />
              Play video
            </span>
          )}
        </button>
      </div>
      <div className="group relative z-0 flex aspect-video items-center justify-center overflow-hidden rounded-box">
        <video
          ref={videoRef}
          controls
          className="h-auto w-full"
          poster="/images/poster-video.png"
        >
          <source src="/videos/videofatme.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          onClick={playVideo}
          className="btn btn-circle absolute hidden items-center justify-center group-hover:flex"
        >
          {isPlaying ? (
            <Image
              src="/icons/pause.svg"
              alt="icon-pause"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/icons/play.svg"
              alt="icon-play"
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
