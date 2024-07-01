"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";

const CompaniesScrollDesktop: FC = () => {
  const companiesSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: companiesSection,
    offset: ["0 1", "50% 50%"],
    layoutEffect: false,
  });

  const translateXSec1 = useTransform(scrollYProgress, [0, 1], [-590, 0]);
  const translateXSec2 = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-[8vw] overflow-hidden">
      <motion.div
        ref={companiesSection}
        style={{
          translateX: translateXSec1,
        }}
        className="flex justify-between items-center flex-1 desktop-companies"
      >
        <Image
          className="grayscale w-24 lg:w-28"
          sizes="100vw"
          src="/images/companies/amazon.png"
          alt="amazon company"
          width={125}
          height={48}
        />
        <Image
          className="grayscale w-24 lg:w-28"
          sizes="100vw"
          src="/images/companies/dribbble .png"
          alt="dribbble company"
          width={125}
          height={48}
        />
        <Image
          className="grayscale w-24 lg:w-28"
          sizes="100vw"
          src="/images/companies/hubspot.png"
          alt="hubspot company"
          width={125}
          height={48}
        />
      </motion.div>
      <motion.div
        style={{
          translateX: translateXSec2,
        }}
        className="flex justify-between items-center flex-1 desktop-companies"
      >
        <Image
          className="grayscale w-24 lg:w-32 "
          sizes="100vw"
          src="/images/companies/notion.png"
          alt="notion company"
          width={147}
          height={48}
        />
        <Image
          className="grayscale w-24 lg:w-28"
          sizes="100vw"
          src="/images/companies/netflix.png"
          alt="netflix company"
          width={125}
          height={48}
        />
        <Image
          className="grayscale w-24 lg:w-28"
          sizes="100vw"
          src="/images/companies/zoom.png"
          alt="zoom company"
          width={111}
          height={48}
        />
      </motion.div>
    </div>
  );
};

export default CompaniesScrollDesktop;
