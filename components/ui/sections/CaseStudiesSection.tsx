"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useAnimation, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import "swiper/css";

const CaseStudies: string[] = [
  " For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  " For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

const CaseStudiesSection: FC = () => {
  return (
    <section className="flex flex-col gap-8 lg:container lg:gap-14">
      <div className="section-header__container">
        <h1 className="section-header__title">Case Studies</h1>
        <p className="section-header__desc ">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div>
        <Swiper
          className="!box-border !px-7 lg:!px-0 lg:bg-custom-secondary-color lg:rounded-40 lg:!flex !justify-center"
          wrapperClass="divide-x-2 lg:py-14 lg:px-5 xl:py-16 !box-border lg:!w-auto"
          breakpoints={{
            0: {
              spaceBetween: 30,
              slidesPerView: 1.1,
            },
            648: {
              spaceBetween: 30,
              slidesPerView: 2.1,
            },
            1024: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
          }}
        >
          {CaseStudies.map((caseStudy, index) => (
            <SwiperSlide
              key={index}
              className="bg-custom-secondary-color rounded-40 text-white p-10 lg:rounded-none lg:p-0 lg:px-14 xl:px-16"
            >
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  delay: 0,
                }}
                className="flex flex-col items-start gap-5"
              >
                <p className="line-clamp-4">{caseStudy}</p>
                <LearnMoreBtn />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const LearnMoreBtn = () => {
  const controls = useAnimation();

  //   Variant
  const variant: Variants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 360,
    },
  };

  return (
    <motion.button
      onMouseEnter={() => controls.start("hover")}
      onMouseLeave={() => controls.start("initial")}
      className="flex justify-center items-center gap-2 text-custom-primary-color py-1.5"
      aria-label="Learn More Case Studies"
    >
      <span>Learn more</span>
      <motion.span variants={variant} animate={controls}>
        <FiArrowUpRight size={30} />
      </motion.span>
    </motion.button>
  );
};

export default CaseStudiesSection;
