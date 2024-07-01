"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, ReactNode, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

type Props = {
  children: ReactNode;
  alt: string;
  image: string;
  boxBgColor: "green" | "gray" | "black";
  imgClassName?: string;
};
const ServiceBox: FC<Props> = ({
  boxBgColor,
  image,
  alt,
  children,
  imgClassName,
}) => {
  const controls = useAnimation();
  const box = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: box,
    offset: ["0 1", "50% 50%"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [200, 0]);

  // Variant
  const variant: Variants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 360,
    },
  };

  // Handlers
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }

  return (
    <motion.div
      ref={box}
      style={{
        opacity: scrollYProgress,
        translateY,
      }}
      className={cn([
        "p-12 rounded-40 border-2 border-black  shadow-b-5 grid grid-cols-2 gap-y-12 lg:grid-rows-2 lg:order-1 lg:p-10  lg:gap-x-10 ",
        boxBgColor === "gray" && "bg-custom-gray-color",
        boxBgColor === "black" && "bg-black",
        boxBgColor === "green" && "bg-custom-primary-color",
      ])}
    >
      <div className="flex flex-col items-start col-span-2 order-1 lg:row-span-1 lg:col-span-1 lg:order-2">
        {children}
      </div>
      <div className="col-span-1 order-3 w-40  lg:row-span-2 lg:self-center lg:w-52 lg:h-auto justify-self-end  flex justify-end items-center">
        <Image
          className={imgClassName}
          src={image}
          alt={alt}
          width={210}
          height={170}
        />
      </div>
      <div className="col-span-1 order-2 self-end lg:row-span-1 lg:order-3">
        <motion.button
          onMouseEnter={handleMouseEnterControls}
          onMouseLeave={handleMouseLeaveControls}
          transition={{ duration: 0.2 }}
          className="flex justify-center items-center gap-3"
          aria-label="learn more about service"
        >
          <motion.span
            variants={variant}
            animate={controls}
            className={cn([
              "size-10 rounded-full flex justify-center items-center",
              boxBgColor !== "black" && "bg-black  text-custom-primary-color",
              boxBgColor === "black" && "bg-white  text-black",
            ])}
          >
            <FiArrowUpRight size={30} />
          </motion.span>
          <span
            className={cn([
              "hidden lg:block text-lg",
              boxBgColor === "black" && "text-white",
            ])}
          >
            Learn more
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceBox;
