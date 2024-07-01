"use client";
import React, { FC, useRef } from "react";
import TeamBox from "../TeamBox";
import { TeamMemberType } from "@/types/TeamMember";
import CustomButton from "@/components/modules/CustomButton";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const teamMembers: TeamMemberType[] = [
  {
    image: "profile-1.svg",
    fullName: "Sarah Kim",
    jobTitle: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
  {
    image: "profile-2.svg",
    fullName: "John Smith",
    jobTitle: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: "profile-3.svg",
    fullName: "Jane Doe",
    jobTitle: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: "profile-4.svg",
    fullName: "Michael Brown",
    jobTitle: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: "profile-5.svg",
    fullName: "Emily Johnson",
    jobTitle: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: "profile-6.svg",
    fullName: "Brian Williams",
    jobTitle: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
];

const TeamSection: FC = () => {
  const btn = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: btn,
    offset: ["0 1", "55% 55%"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section className="container mt-24">
      <div className="section-header__container">
        <h1 className="section-header__title">Team</h1>
        <p className="section-header__desc">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="mt-8 lg:mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((teamMember, index) => (
          <TeamBox {...teamMember} key={index} />
        ))}
        <motion.div
          ref={btn}
          style={{
            opacity: scrollYProgress,
            translateY,
          }}
          className=" md:col-span-2 lg:col-start-2 lg:col-end-3 xl:col-start-3 xl:col-end-4 lg:w-72 lg:justify-self-end xl:w-56"
        >
          <CustomButton className="perspective-btn w-full" colorBtn="black">
            <div className="perspective-text-container">
              <span className="perspective-text">See all team</span>
              <span className="perspective-text">See all team</span>
            </div>
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
