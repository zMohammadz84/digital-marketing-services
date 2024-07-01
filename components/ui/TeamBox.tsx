"use client";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { TeamMemberType } from "@/types/TeamMember";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { motion } from "framer-motion";

const TeamBox: FC<TeamMemberType> = ({
  description,
  fullName,
  image,
  jobTitle,
}) => {
  const box = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: box,
    offset: ["0 1", "55% 55%"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <motion.div
      style={{
        opacity: scrollYProgress,
        translateY,
      }}
      ref={box}
      className="p-10 md:p-8 lg:p-10 xl:p-10 border-2 border-black rounded-40 shadow-b-5"
    >
      <div className="flex justify-between items-end gap-x-2.5 sm:gap-x-5  ">
        <Image
          className="w-20 sm:w-auto"
          src={`/images/${image}`}
          alt="profile-image"
          width={100}
          height={100}
        />
        <div className="flex flex-col items-start flex-1 h-full lg:gap-3 ">
          <Link
            aria-label="linkedin"
            href="#"
            className="flex justify-center items-center size-10 bg-black rounded-full self-end group hover:bg-custom-primary-color transition-all duration-300 hover:ring-2 hover:ring-black"
          >
            <FaLinkedinIn
              size={20}
              className="text-custom-primary-color group-hover:text-black transition-all duration-300 "
            />
          </Link>
          <div className="flex flex-col justify-center items-start ">
            <span className="font-bold text-lg">{fullName}</span>
            <span className="font-[300]">{jobTitle}</span>
          </div>
        </div>
      </div>
      <hr className="border-none h-[1.5px] bg-black my-5" />
      <p>{description}</p>
    </motion.div>
  );
};

export default TeamBox;
