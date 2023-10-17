import { Quicksand } from "next/font/google";
import React from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

const Logo = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
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
