"use client";
import CustomButton from "@/components/modules/CustomButton";
import CustomInput from "@/components/modules/CustomInput";
import CustomRadio from "@/components/modules/CustomRadio";
import CustomTextarea from "@/components/modules/CustomTextarea";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { Radio } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactUsSection: FC = () => {
  const img = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: img,
    offset: ["0 1", "50% 70%"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [180, 0]);

  return (
    <section className="container mt-24">
      <div className="section-header__container">
        <h1 className="section-header__title">Contact Us</h1>
        <p className="section-header__desc">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </div>
      <form className="mt-8 lg:mt-14 relative lg:bg-custom-gray-color lg:rounded-40 lg:py-12 lg:px-16 overflow-hidden">
        <div className="bg-custom-gray-color rounded-40 py-12 px-8 flex flex-col gap-8 lg:p-0 lg:max-w-96 xl:max-w-[600px]">
          <Radio.Group
            defaultValue={1}
            className="flex justify-center items-center gap-8 lg:justify-start"
          >
            <CustomRadio value={1} className="text-base">
              Say Hi
            </CustomRadio>
            <CustomRadio value={2} className="text-base">
              Get a Quote
            </CustomRadio>
          </Radio.Group>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <CustomInput placeholder="Name" label="Name" />
            </div>
            <div className="flex flex-col gap-2">
              <CustomInput placeholder="Email" label="Email *" />
            </div>
            <div className="flex flex-col gap-2">
              <CustomTextarea
                className="resize-none"
                placeholder="Message"
                label="Message *"
                rows={5}
              />
            </div>
          </div>
        </div>
        <CustomButton
          htmlType="submit"
          className="perspective-btn w-full mt-8 lg:max-w-96 xl:max-w-[600px] lg:mt-10"
          colorBtn="black"
        >
          <div className="perspective-text-container">
            <span className="perspective-text">Send Message</span>
            <span className="perspective-text">Send Message</span>
          </div>
        </CustomButton>
        <motion.div
          ref={img}
          style={{
            rotate,
          }}
          transition={{
            duration: 0.5,
          }}
          className="hidden lg:block lg:absolute lg:top-12 lg:bottom-12 lg:-right-[17.3rem]"
        >
          <Image
            className="h-full lg:w-auto"
            src="/images/formImage.png"
            alt="form-image"
            width={649}
            height={692}
          />
        </motion.div>
      </form>
    </section>
  );
};

export default ContactUsSection;
