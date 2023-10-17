import { Quicksand } from "next/font/google";
import React from "react";

const quickSand = Quicksand({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <a
        href="/"
        className={`${quickSand.className} text-3xl font-semibold tracking-wider`}
      >
        gift-it
      </a>
    </div>
  );
}
