import React from "react";
import { LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";

export const links = [
  {
    id: 0,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 1,
    name: "Gift Lab",
    link: "/lab",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
] as const;

export const buttons = [
  {
    id: 0,
    name: "shopping",
    icon: React.createElement(LuShoppingBag),
  },
  {
    id: 1,
    name: "user",
    icon: React.createElement(LuUser),
  },
  {
    id: 2,
    name: "search",
    icon: React.createElement(LuSearch),
  },
] as const;
