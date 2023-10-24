"use client";

import React, { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiChevronDown } from "react-icons/bi";
import { userTitles } from "@/lib/data";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [titleMenuVisible, setTitleMenuVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    setemail(ref.current!.value);
  };

  useEffect(() => {
    const regexPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setIsValid(regexPattern.test(email));
  }, [email, isValid]);

  return (
    <main className="flex flex-col items-center justify-center w-full py-12 max-w-screen-2xl ">
      <section className="flex flex-col items-center w-fit pt-[2.5rem]">
        <h2 className="text-4xl mt-6 uppercase">my gift-it account</h2>
        <div className="py-10">
          <button className="flex items-center justify-center gap-2 w-[18rem] h-[3rem] border-2 border-black">
            <FcGoogle className="text-2xl" />
            <span className="uppercase font-medium">Continue with google</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-[2rem] text-center text-lg">
          <p>or</p>
          <h3 className="text-2xl">
            Continue with your email <br /> address
          </h3>
          <p>
            Sign in with your gift-it email and password or <br /> create a
            profile if you are new.
          </p>
          <form className="w-full mb-28">
            <div className="group input-block">
              <label className="input-label group-focus-within:top-2 group-focus-within:text-xs">
                Email*
              </label>
              <input type="email" className="cus-input" />
              <span className="input-error">
                Please enter a valid email address
              </span>
            </div>
            {true && (
              <>
                <div className="group input-block">
                  <label className="input-label group-focus-within:top-2 group-focus-within:text-xs">
                    Create Password*
                  </label>
                  <input type="password" className="cus-input" />
                  <div className="flex flex-col text-start mt-2">
                    <div className="password-rules">
                      - Please enter at least 8 characters
                    </div>
                    <div className="password-rules">
                      - Please enter at least one number
                    </div>
                    <div className="password-rules">
                      - Please enter one special character {"(!+,-./:;<=>?@)"}
                    </div>
                  </div>
                </div>
                <div className="relative input-block">
                  <button
                    className=" cus-input flex pt-0 items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setTitleMenuVisible(!titleMenuVisible);
                    }}
                  >
                    <span>{userTitle}</span>
                    <label
                      className={`input-label ${
                        userTitle.length > 0 && "!top-2 !text-xs"
                      }`}
                    >
                      Select title*
                    </label>
                    <span className="h-full flex-1 flex items-center justify-end text-sm">
                      <BiChevronDown className="mb-3" />
                    </span>
                  </button>
                  {titleMenuVisible && (
                    <div className="absolute z-10 left-0 top-[70%] bg-white w-full">
                      <ul className="flex flex-col items-start gap-2 ">
                        {userTitles.map((item) => (
                          <li
                            key={item.id}
                            className="flex text-xs pl-[12px] py-[10px] px-[6px] hover:bg-gray-500/10 w-full cursor-pointer"
                            onClick={() => {
                              setUserTitle(item.title);
                              setTitleMenuVisible(false);
                            }}
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <span className="input-error z-0">Please select a title</span>
                </div>
                <div className="group input-block">
                  <label className="input-label group-focus-within:top-2 group-focus-within:text-xs">
                    First Name*
                  </label>
                  <input type="text" className="cus-input" />
                  <span className="input-error">
                    Please enter your first name
                  </span>
                </div>
                <div className="group input-block">
                  <label className="input-label group-focus-within:top-2 group-focus-within:text-xs">
                    Last Name*
                  </label>
                  <input type="text" className="cus-input" />
                  <span className="input-error">
                    Please enter your last name
                  </span>
                </div>
                <div className="w-[26rem] flex flex-col items-start mb-5">
                  <span className="input-label !static !text-xs py-2">
                    Date of birth*
                  </span>

                  <div className="w-full flex gap-2">
                    <div className="relative flex-1  h-14 w-32 flex">
                      <label className="input-label static !text-xs !top-2">
                        Month*
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={12}
                        placeholder="MM"
                        className="h-14 w-full border border-black pt-3 px-3 text-[14px] leading-5 tracking-wide"
                      />
                    </div>
                    <div className="relative flex-1  h-14 w-32 flex">
                      <label className="input-label static !text-xs !top-2">
                        Day*
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={31}
                        placeholder="DD"
                        className="h-14 w-full border border-black pt-3 px-3 text-[14px] leading-5 tracking-wide"
                      />
                    </div>
                    <div className="relative flex-1  h-14 w-32 flex">
                      <label className="input-label static !text-xs !top-2">
                        Year*
                      </label>
                      <input
                        type="number"
                        min={1923}
                        max={2023}
                        placeholder="YYYY"
                        className="h-14 w-full border border-black pt-3 px-3 text-[14px] leading-5 tracking-wide"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div>
              <button className="flex items-center justify-center gap-2 w-full px-4 py-[17px] tracking-widest bg-black text-white uppercase font-bold text-base">
                Continue
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
