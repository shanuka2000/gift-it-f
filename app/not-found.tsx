import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "404: The page could not be found.",
};

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full py-12 max-w-screen-2xl">
        <section className="flex flex-col items-center justify-center pt-[2.5rem]">
          <h1 className="text-[10rem] md:text-[12rem]">404</h1>
          <p className="text-center">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below <br /> to go back to the
            home page.
          </p>
          <Link
            href="/"
            className="flex items-center justify-center w-[8rem] h-[2.5rem] my-4 uppercase bg-gradient-to-r from-[#ffc73b] to-[#ff4440] focus:scale-110 hover:scale-110 transition-all text-white font-bold rounded-md"
          >
            <span>Home</span>
          </Link>
        </section>
      </main>
    </>
  );
}

export default NotFound;
