"use client";
import CustomButton from "../modules/CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

const CTASection: FC = () => {
  return (
    <section className="container my-24">
      <div className="p-12 rounded-40 lg:flex relative bg-custom-gray-color">
        <div className="lg:w-[500px] relative z-10 overflow-hidden">
          <motion.div
            initial={{
              x: -200,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              type: "spring",
              damping: 15,
            }}
            className=" flex flex-col justify-center items-center gap-5 text-center lg:text-left lg:items-start"
          >
            <h2 className="text-2xl">Let’s make things happen</h2>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <CustomButton
              colorBtn="black"
              className="perspective-btn w-full lg:w-56 h-14"
            >
              <div className="perspective-text-container">
                <div className="perspective-text">Get your free proposal</div>
                <div className="perspective-text">Get your free proposal</div>
              </div>
            </CustomButton>
          </motion.div>
        </div>
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: "spring",
            damping: 10,
          }}
          className="hidden lg:flex lg:justify-center lg:flex-1 relative z-10 origin-[75%_50%]"
        >
          <Image
            className="absolute right-10 -top-20 w-72"
            src="/images/CTA.png"
            alt="CTA image"
            width={395}
            height={359}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
