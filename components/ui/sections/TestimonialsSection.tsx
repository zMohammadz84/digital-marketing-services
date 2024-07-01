"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials: { comment: string; fullName: string; job: string }[] = [
  {
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    fullName: " John Smith",
    job: "Marketing Director at XYZ Crop",
  },
  {
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    fullName: " John Smith",
    job: "Marketing Director at XYZ Crop",
  },
  {
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.  working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    fullName: " John Smith",
    job: "Marketing Director at XYZ Crop",
  },
  {
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    fullName: " John Smith",
    job: "Marketing Director at XYZ Crop",
  },
  {
    comment:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence. of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow t"',
    fullName: " John Smith",
    job: "Marketing Director at XYZ Crop",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="container mt-24">
      <div className="section-header__container">
        <h1 className="section-header__title">Testimonials</h1>
        <p className="section-header__desc">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="mt-8 lg:mt-14 bg-black rounded-40">
        <Swiper
          className="testimonials !p-10 lg:!p-20"
          modules={[Navigation, Pagination]}
          centeredSlides
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="rotate-45 ${className}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <g clipPath="url(#clip0_103_9)">
                    <path
                      d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z"
                      fill="url(#paint0_linear_103_9)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_9"
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#DF99F7" />
                      <stop offset="1" stopColor="#FFDBB0" />
                    </linearGradient>
                    <clipPath id="clip0_103_9">
                      <rect width="200" height="200" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>`;
            },
          }}
          breakpoints={{
            0: {
              spaceBetween: 50,
              slidesPerView: 1,
            },
            1024: {
              spaceBetween: 50,
              slidesPerView: 2,
            },
            1535: {
              spaceBetween: 50,
              slidesPerView: 2.5,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className=" text-white !flex flex-col gap-10 "
            >
              <div className="relative border-2 border-custom-primary-color rounded-40 p-7 lg:py-10 testimonials-comment">
                <p className="line-clamp-[8]">{testimonial.comment}</p>
              </div>
              <div className="flex flex-col ml-5 sm:ml-16">
                <span className="text-custom-primary-color font-bold text-lg">
                  {testimonial.fullName}
                </span>
                <span>{testimonial.job}</span>
              </div>
            </SwiperSlide>
          ))}

          <motion.div
            whileHover={{
              rotate: 360,
            }}
            className="absolute bottom-11 left-10 prevBtn z-40 md:left-32 cursor-pointer lg:bottom-[5.35rem] group"
          >
            <FaArrowLeft
              size={25}
              className="text-white group-hover:text-custom-primary-color"
            />
          </motion.div>
          <motion.div
            whileHover={{
              rotate: 360,
            }}
            className="absolute bottom-11 right-10 nextBtn z-40 md:right-32 cursor-pointer lg:bottom-[5.35rem] group"
          >
            <FaArrowRight
              size={25}
              className="text-white group-hover:text-custom-primary-color"
            />
          </motion.div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
