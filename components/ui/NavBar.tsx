"use client";
import { motion, Variants } from "framer-motion";
import { menuItems } from "./Header";
import Link from "next/link";
import CustomButton from "../modules/CustomButton";
import { FC } from "react";

const NavBar: FC = () => {
  // Framer Motion Variant
  const menuItemsVariants: Variants = {
    close: {
      translateY: 100,
      opacity: 0,
      scale: 1,
    },
    open: (index: number) => ({
      translateY: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * index,
        type: "spring",
        damping: 14,
      },
    }),
    exit: { translateY: 150, opacity: 0, scale: 1 },
    hover: {
      scale: 1.2,
      fontWeight: 900,
    },
  };

  return (
    <nav className="hidden overflow-hidden lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
      <CustomButton
        className="w-44 ml-5 perspective-btn lg:w-52"
        colorBtn="green"
      >
        <div className="perspective-text-container">
          <span className="perspective-text">Request a quote</span>
          <span className="perspective-text">Request a quote</span>
        </div>
      </CustomButton>
      {menuItems.map((menuItem, index) => (
        <motion.div
          key={index}
          initial="close"
          animate="open"
          exit="exit"
          variants={menuItemsVariants}
          className="flex pl-3"
          custom={index}
          whileHover="hover"
        >
          <Link href="/" className="p-3 w-full text-lg ">
            {menuItem}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default NavBar;
