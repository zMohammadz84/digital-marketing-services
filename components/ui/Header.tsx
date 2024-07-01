import Image from "next/image";
import { FC } from "react";
import NavBarMenu from "./NavBarMenu";
import Link from "next/link";
import NavBar from "./NavBar";

export const menuItems = [
  "Blog",
  "Pricing",
  "Use Cases",
  "Services",
  "About us",
];

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex justify-between items-center py-5">
        <Link href="/">
          <Image
            className="w-36"
            src="/images/headerLogo.svg"
            alt="logo"
            width={200}
            height={50}
            priority
          />
        </Link>
        {/* Desktop */}
        <NavBar />
        {/* Mobile */}
        <NavBarMenu />
      </div>
    </header>
  );
};

export default Header;
