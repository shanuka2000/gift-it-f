import { quicksand } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="select-none">
      <a
        href="/"
        className={`${quicksand.className} text-3xl font-semibold tracking-wider flex items-center justify-center`}
      >
        <Image
          src="/logobox.png"
          alt="logo"
          width={25}
          height={25}
          quality={95}
          priority
        />
        <span>-it</span>
      </a>
    </div>
  );
};

export default Logo;
