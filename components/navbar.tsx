"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import { links, userLinks } from "@/lib/data";
import Link from "next/link";
import { AnimatePresence, motion, usePresence } from "framer-motion";

import { IoBagOutline, IoClose } from "react-icons/io5";
import { LuChevronRight, LuMenu, LuSearch, LuUser } from "react-icons/lu";
import gsap from "gsap";

const Navbar = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [userAccountMenuVisible, setUserAccountMenuVisible] = useState(false);

  const onCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white">
      <div className="relative flex items-center justify-between px-10 py-5 w-full md:justify-around">
        <Logo />
        <ul className="gap-[2rem] hidden md:flex">
          {links.map((item) => (
            <li key={item.id} className="font-semibold">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3 md:gap-[2rem] text-xl ">
          <li
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => {
              setCartVisible(!cartVisible);
              setSideMenuVisible(false);
              setUserAccountMenuVisible(false);
            }}
          >
            <IoBagOutline />
            <p className="absolute text-[0.6rem] mt-1 font-semibold">1</p>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setUserAccountMenuVisible(!userAccountMenuVisible);
              setCartVisible(false);
              setSideMenuVisible(false);
            }}
          >
            <LuUser />
          </li>
          <li className="cursor-pointer">
            <LuSearch />
          </li>
          <li
            className="md:hidden cursor-pointer"
            onClick={() => {
              setSideMenuVisible(!sideMenuVisible);
              setCartVisible(false);
              setUserAccountMenuVisible(false);
            }}
          >
            <LuMenu />
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {sideMenuVisible && <SideMenu />}
        {cartVisible ? <UserCart onSubmit={onCloseCart} /> : null}
        {userAccountMenuVisible && <UserDropdown />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

const UserDropdown = () => {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        translateY: -100,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      className="absolute w-full bg-transparent flex items-center justify-center md:justify-end"
    >
      <div className="bg-white rounded-lg shadow-xl w-[80%] md:w-fit md:mr-[9rem]">
        <ul className="flex flex-col py-2">
          {userLinks.map((item) => (
            <li key={item.id} className="flex px-5 py-2 uppercase">
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

type UserCartProps = {
  onSubmit: () => void;
};

const UserCart = ({ onSubmit }: UserCartProps) => {
  const handleClose = () => {
    onSubmit();
  };

  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        translateY: -100,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      className="absolute w-full bg-transparent flex items-center justify-center md:justify-end"
    >
      <div className="bg-white border border-black rounded-lg shadow-xl w-[80%] md:w-[40%] md:mr-6">
        <div className="flex items-center justify-between px-5 py-4">
          <h3 className="font-semibold">Added to shopping bag</h3>
          <span onClick={handleClose} className="cursor-pointer">
            <IoClose />
          </span>
        </div>
        <div className="border-t border-black/30 py-4 flex items-center justify-center">
          <p className="text-gray-500">No Items</p>
        </div>
        <div className="border-t border-black/30 py-4 flex flex-col items-center justify-center gap-4">
          <button className="w-[90%] py-4 bg-black text-white font-bold">
            Checkout
          </button>
          <button className="w-[90%] py-4 border border-black font-bold">
            View shopping bag
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const SideMenu = () => {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        translateY: -10,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      className="bg-white border-t-2 border-black/30"
    >
      <ul className="flex flex-col items-center justify-center shadow-xl py-3">
        {links.map((item) => (
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants}
            custom={item.id}
            key={item.id}
            className="py-[1rem]  w-[50%] px-4"
          >
            <Link
              href={item.link}
              className="flex items-center justify-between font-semibold"
            >
              <span>{item.name}</span>
              <LuChevronRight />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
