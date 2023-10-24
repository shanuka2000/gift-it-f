import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs font-semibold">
        &copy; 2024 gift-it. All rights reserved.
      </small>
      <p className="text-xs font-semibold">
        <span className="font-bold">About this website: </span>
        build with React & Next.js (App Router & Server Actions), Typescript,
        Tailwind CSS, Framer Motion, gsap, React Email & Resend, Netlify
        hosting.
      </p>
    </footer>
  );
};

export default Footer;
