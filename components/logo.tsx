import { quicksand } from "@/app/fonts";
import React from "react";

const Logo = () => {
  return (
    <div className="select-none">
      <a
        href="/"
        className={`${quicksand.className} text-3xl font-semibold tracking-wider`}
      >
        gift-it
      </a>
    </div>
  );
};

export default Logo;
