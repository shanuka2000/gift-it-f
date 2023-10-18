import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

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

export default SideMenu;
