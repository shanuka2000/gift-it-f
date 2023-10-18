import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { LuMenu, LuSearch, LuUser } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import UserDropdown from "./user-dropdown";
import UserCart from "./user-cart";
import Logo from "./logo";
import SideMenu from "./side-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-0 z-50 w-full py-7 max-md:flex-col bg-white">
      <div className="flex items-center justify-around mx-auto w-full max-w-screen-2xl max-md:justify-between  px-6 sm:px-16">
        <Logo />

        <ul className="flex gap-[2rem] max-md:hidden">
          {links.map((link) => (
            <li
              key={link.id}
              className="border-b-2 border-b-transparent hover:border-black transition-all"
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-[2rem] text-xl max-md:gap-3">
          <li className="cursor-pointer relative flex items-center justify-center">
            <IoBagOutline className="font-bolder" />
            {!true && (
              <p className="absolute text-[0.6rem] mt-1 font-semibold">1</p>
            )}
            {!true && <UserCart />}
          </li>
          <li className="cursor-pointer relative flex items-center justify-center">
            <LuUser />
            {!true && <UserDropdown />}
          </li>
          <li className="cursor-pointer">
            <LuSearch />
          </li>
          <li>
            <LuMenu className="text-lg block md:hidden" />
          </li>
        </ul>
      </div>
      {!true && <SideMenu />}
    </nav>
  );
};

export default Navbar;
