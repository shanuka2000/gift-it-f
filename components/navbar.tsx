import React from "react";
import Link from "next/link";
import { links, userLinks } from "@/lib/data";
import { LuChevronRight, LuMenu, LuSearch, LuUser } from "react-icons/lu";
import { IoBagOutline, IoClose } from "react-icons/io5";
import Logo from "./logo";

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
            {true && <UserCart />}
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

const UserCart = () => {
  return (
    <div className="absolute bg-transparent mx-auto w-[30rem] top-4 flex items-center justify-center max-md:-left-[22rem]">
      <div className="flex flex-col w-[80%] gap-4 mt-3 shadow-2xl rounded-lg">
        <div className="w-full flex items-center justify-center px-5 py-6 border-b-2 border-black/25">
          <div className="flex-1 flex items-center justify-center text-lg font-semibold">
            <h3 className="">Added to shopping bag</h3>
          </div>
          <IoClose className="text-base" />
        </div>
        <div className="flex items-center justify-center w-full border-b-2 pb-3 border-black/25">
          <h3 className="text-black/40">No Items</h3>
        </div>
        <div className="flex flex-col gap-2 pb-3">
          <button className="bg-black text-white w-[95%] mx-auto py-4">
            Checkout
          </button>
          <button className="border-2 border-black boeder w-[95%] mx-auto py-4">
            View shopping bag
          </button>
        </div>
      </div>
    </div>
  );
};

const UserDropdown = () => {
  return (
    <div className="absolute bg-transparent mx-auto w-[25rem] top-4 flex items-center justify-center max-md:-left-[22rem]">
      <ul className="flex flex-col gap-4 mt-3 shadow-2xl pr-[5rem] pl-4 w-[80%] rounded-lg">
        {userLinks.map((link) => (
          <li key={link.id} className="py-1 last:pb-2 first:pt-2">
            <Link href={link.url} className="uppercase">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="w-full px-16 py-4 mt-3 border-t-2 border-black/40">
      <ul className="flex flex-col gap-[2rem]">
        {links.map((link) => (
          <li key={link.id} className=" transition-all">
            <Link
              href={link.link}
              className="flex items-center justify-between"
            >
              <span>{link.name}</span>
              <LuChevronRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
