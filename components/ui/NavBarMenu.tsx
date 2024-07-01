"use client";
import React, { FC, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Drawer } from "antd";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import CustomButton from "../modules/CustomButton";
import { menuItems } from "./Header";

const NavBarMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HiBars3
        onClick={showDrawer}
        className="lg:hidden w-8 h-8 cursor-pointer"
      />
      <Drawer
        classNames={{
          wrapper: "lg:hidden",
          mask: "lg:hidden bg-gray-600/50",
        }}
        open={open}
        onClose={onClose}
        width={250}
        closeIcon={false}
      >
        <div className="flex flex-col">
          {/* Nav */}
          <AnimatePresence>{open && <Nav />}</AnimatePresence>
          <CustomButton block className="perspective-btn mt-5" colorBtn="green">
            <div className="perspective-text-container">
              <span className="perspective-text">Request a quote</span>
              <span className="perspective-text">Request a quote</span>
            </div>
          </CustomButton>
        </div>
      </Drawer>
    </>
  );
};

const Nav = () => {
  // Framer Motion Variant
  const menuItemsVariants: Variants = {
    close: {
      translateX: 150,
      opacity: 0,
      scale: 1,
    },
    open: (index: number) => ({
      translateX: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * index,
        type: "spring",
        damping: 14,
      },
    }),
    exit: { translateX: 150, opacity: 0, scale: 1 },
    hover: {
      scale: 1.2,
      fontWeight: 900,
    },
  };

  return (
    <div className="flex flex-col overflow-hidden">
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
          <Link href="/" className="p-3 w-full text-lg">
            {menuItem}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NavBarMenu;
