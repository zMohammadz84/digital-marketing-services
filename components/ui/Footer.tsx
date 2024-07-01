import Image from "next/image";
import Link from "next/link";
import CustomInput from "../modules/CustomInput";
import CustomButton from "../modules/CustomButton";
import { FC } from "react";
import { menuItems } from "./Header";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="lg:container">
      <div className="bg-black text-white py-12 px-5 mt-28 lg:bg-black lg:rounded-t-40 lg:px-14 lg:py-10 ">
        <div className="grid grid-cols-1 lg:bg-black lg:grid-cols-5 xl:gap-14 lg:gap-10 ">
          <Link
            href="/"
            className="lg:w-36 flex justify-center items-center mx-auto lg:col-span-1 lg:m-0 lg:order-1"
          >
            <Image
              src="/images/footerLogo.svg"
              alt="logo"
              width={200}
              height={50}
              priority
            />
          </Link>

          <div className="flex flex-col items-center gap-1 mt-10 text-lg lg:flex-row-reverse lg:col-span-3 lg:mt-0 lg:justify-center lg:order-2">
            {menuItems.map((item, index) => (
              <Link
                className="w-full text-center py-2 lg:py-0 xl:px-4 lg:px-3 lg:w-auto lg:underline lg:hover:no-underline lg:hover:text-custom-primary-color lg:"
                key={index}
                href="#"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex gap-5 justify-center items-center mt-10 order-5 lg:col-span-1 lg:mt-0 lg:justify-self-end lg:order-3">
            <Link
              aria-label="linkedin"
              href="#"
              className="flex justify-center items-center size-10 xl:size-10 lg:size-8 bg-white rounded-full self-end group hover:bg-black transition-all duration-300 hover:ring-2 hover:ring-white"
            >
              <FaLinkedinIn
                size={20}
                className="text-black group-hover:text-white transition-all duration-300 "
              />
            </Link>
            <Link
              aria-label="linkedin"
              href="#"
              className="flex justify-center items-center size-10 xl:size-10 lg:size-8 bg-white rounded-full self-end group hover:bg-black transition-all duration-300 hover:ring-2 hover:ring-white"
            >
              <FaFacebookF
                size={20}
                className="text-black group-hover:text-white transition-all duration-300 "
              />
            </Link>
            <Link
              aria-label="linkedin"
              href="#"
              className="flex justify-center items-center size-10 xl:size-10 lg:size-8 bg-white rounded-full self-end group hover:bg-black transition-all duration-300 hover:ring-2 hover:ring-white"
            >
              <FaTwitter
                size={20}
                className="text-black group-hover:text-white transition-all duration-300 "
              />
            </Link>
          </div>
          <div className="text-center mt-10 lg:col-span-2 lg:text-left lg:mt-0 lg:order-4">
            <span className="bg-custom-primary-color text-black py-0.5 px-2 rounded-md">
              Contact us :
            </span>
            <p className="mt-5">Email: info@positivus.com</p>
            <p className="mt-3">Phone: 555-567-8901</p>
            <p className="mt-3 lg:w-80">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="relative w-full  bg-[#292a32] p-6 rounded-xl flex flex-col gap-5 mt-10 lg:col-span-3 xl:w-[35rem] lg:flex-row justify-self-end self-start lg:py-10 lg:px-8 lg:mt-0 lg:order-5">
            <CustomInput
              className="bg-transparent border-white h-14 lg:flex-1"
              placeholder="Email"
            />
            <CustomButton
              className="perspective-btn bg-custom-primary-color text-black border-0 h-14 lg:flex-1"
              colorBtn="green"
            >
              <div className="perspective-text-container">
                <span className="perspective-text">Subscribe to news</span>
                <span className="perspective-text">Subscribe to news</span>
              </div>
            </CustomButton>
          </div>
        </div>
        <hr className="border-0 h-[1.5px] bg-white my-10" />
        <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start lg:gap-10">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link className="underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
