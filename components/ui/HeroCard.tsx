"use client";
import Image from "next/image";
import { FC } from "react";
import CustomButton from "../modules/CustomButton";
import { motion } from "framer-motion";
import CompaniesScroll from "./CompaniesScroll";

const HeroCard: FC = () => {
  return (
    <>
      <section className="my-8 container">
        <motion.h1
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="lg:hidden text-4xl mb-8"
        >
          Navigating the digital landscape for success
        </motion.h1>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-start">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="hero-card__img"
          >
            <Image
              className="mx-auto xl:w-[38rem]"
              sizes="100vw"
              src="/images/heroCardImg.png"
              alt="hero image"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="flex flex-col gap-8 lg:flex-col lg:max-w-[26rem] xl:max-w-[35rem] ">
            <motion.h1
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="hidden lg:block text-5xl xl:text-6xl text-shadow lg:leading-[60px] xl:leading-[70px]"
            >
              Navigating the digital landscape for success
            </motion.h1>
            <motion.p
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="lg:text-lg lg:max-w-[30rem]"
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </motion.p>
            <motion.div
              className="w-full lg:w-max"
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.5,
              }}
            >
              <CustomButton
                className="perspective-btn w-full lg:w-56 h-14 "
                colorBtn="black"
              >
                <div className="perspective-text-container ">
                  <p className="perspective-text">Book a consultation</p>
                  <p className="perspective-text">Book a consultation</p>
                </div>
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </section>
      <CompaniesScroll />
    </>
  );
};

export default HeroCard;
