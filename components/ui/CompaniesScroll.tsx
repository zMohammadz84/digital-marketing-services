"use client";
import Image from "next/image";
import CompaniesScrollDesktop from "./CompaniesScrollDesktop";
import { motion, useScroll } from "framer-motion";
import { FC, useRef } from "react";

const CompaniesScroll: FC = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scroller,
    offset: ["1 1", "1 60%"],
  });

  return (
    <div className="md:container my-14 lg:mb-36">
      {/* Mobile */}
      <motion.div
        ref={scroller}
        style={{
          opacity: scrollYProgress,
        }}
        className="flex flex-col gap-8 lg:hidden"
      >
        <div className="flex justify-start items-center overflow-hidden scroll-companies__container">
          <div className="flex justify-between items-center flex-nowrap gap-10 min-w-max scroll-companies__inner">
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28 "
                sizes="100vw"
                src="/images/companies/amazon.png"
                alt="amazon company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/dribbble .png"
                alt="dribbble company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/hubspot.png"
                alt="hubspot company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/amazon.png"
                alt="amazon company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/dribbble .png"
                alt="dribbble company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/hubspot.png"
                alt="hubspot company"
                width={125}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center overflow-hidden scroll-companies__container">
          <div className="flex justify-between items-center flex-nowrap gap-10 min-w-max scroll-companies__inner">
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/netflix.png"
                alt="netflix company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/notion.png"
                alt="notion company"
                width={147}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/zoom.png"
                alt="zoom company"
                width={111}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/netflix.png"
                alt="netflix company"
                width={125}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/notion.png"
                alt="notion company"
                width={147}
                height={48}
              />
            </div>
            <div className="w-32 sm:w-52">
              <Image
                className="grayscale w-24 lg:w-28"
                sizes="100vw"
                src="/images/companies/zoom.png"
                alt="zoom company"
                width={111}
                height={48}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Desktop */}
      <CompaniesScrollDesktop />
    </div>
  );
};

export default CompaniesScroll;
