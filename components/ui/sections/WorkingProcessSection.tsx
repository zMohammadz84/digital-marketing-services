"use client";
import { Collapse, type CollapseProps } from "antd";
import { FC, ReactNode } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { motion } from "framer-motion";

type PanelProps = {
  isActive?: boolean | undefined;
};

const WorkingProcessSection: FC = () => {
  // Items
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5 ">
          <span className=" text-3xl lg:text-4xl">01</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Consultation
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5">
          <span className=" text-3xl lg:text-4xl">02</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Research and Strategy Development
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5">
          <span className=" text-3xl lg:text-4xl">03</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Implementation
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5">
          <span className=" text-3xl lg:text-4xl">04</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Monitoring and Optimization
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5">
          <span className=" text-3xl lg:text-4xl">05</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Reporting and Communication
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex justify-start items-center gap-5 lg:gap-5">
          <span className=" text-3xl lg:text-4xl">06</span>
          <span className="w-44 sm:w-auto text-base md:text-xl lg:text-xl font-extrabold">
            Continual Improvement
          </span>
        </div>
      ),
      children: (
        <p className="text-base">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      ),
    },
  ];

  //   Expand Icon
  const expandIcon: CollapseProps["expandIcon"] = ({
    isActive,
  }: PanelProps): ReactNode => {
    return (
      <motion.span
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isActive ? 0 : 180,
        }}
        transition={{
          duration: 0.1,
        }}
        className="border-2 rounded-full p-1 border-black"
      >
        {isActive ? <HiOutlineMinus size={25} /> : <HiOutlinePlus size={25} />}
      </motion.span>
    );
  };

  return (
    <section className="container mt-20">
      <div className="section-header__container">
        <h1 className="lg:section-header__title flex flex-col items-center">
          <span className="section-header__title lg:hidden">Our Working</span>
          <span className="section-header__title lg:hidden"> Process</span>
          <span className="hidden lg:block">Our Working Process</span>
        </h1>
        <p className="section-header__desc">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <Collapse
        className="mt-8 lg:mt-14 flex flex-col gap-5 lg:gap-5 bg-transparent"
        accordion
        items={items}
        expandIconPosition="end"
        expandIcon={expandIcon}
      />
    </section>
  );
};

export default WorkingProcessSection;
