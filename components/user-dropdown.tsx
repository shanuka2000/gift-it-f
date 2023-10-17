import { userLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function UserDropdown() {
  return (
    <div className="absolute bg-transparent mx-auto w-full flex items-center justify-center">
      <ul className="flex flex-col gap-4 mt-3 shadow-2xl pr-[5rem] pl-4  rounded-lg">
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
}
