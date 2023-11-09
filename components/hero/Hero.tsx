import Image from "next/image";
import HeadingText from "../HeadingText";

const Hero = () => {
  return (
    <div className="px-4 mt-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-10">
        <HeadingText
          smallTitle="Chúng tôi"
          bigTitle="Food At The Moment everytime"
          description="Chúng tôi là công ty cung cấp dịch vụ vận chuyển thức ăn chuyên nghiệp với nhiều thương hiệu nổi tiếng."
        />
        <button className="btn btn-outline rounded-btn md:w-fit hover:border-primary hover:text-primary">
          <Image src="/icons/play.svg" alt="play" width={20} height={20} />
          play video
        </button>
      </div>
      <div className="flex justify-center items-center aspect-video">
        <Image src="/images/logo.png" alt="hero" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
