import { userLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

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

export default UserDropdown;
