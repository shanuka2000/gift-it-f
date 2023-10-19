import React from "react";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full py-12 max-w-screen-2xl ">
      <section className="flex flex-col items-center w-full pt-[2.5rem] md:flex-row ">
        <div className="w-[90%] min-h-[35rem] m-auto p-3 flex flex-col items-center justify-center gap-[2rem] md:gap-[3rem] md:min-h-[32rem] md:w-[70%]">
          <h2 className="text-5xl md:text-6xl">Story behind gift-it</h2>
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <p className="text-center w-[90%] text-lg md:text-xl md:[80%]">
              It all started as a simple project to build an ecommerce site. But
              after the founder, while shopping for gifts for his friends,
              realized that existing gift websites didn't offer enough
              customization options, the project's aim changed.
            </p>
            <p className="text-center w-[90%] text-lg md:text-xl md:[80%]">
              Gift-It was born to address this gap. With its focus on
              customization, Gift-It allows users to create unique and
              thoughtful gifts for their loved ones, no matter the occasion.
            </p>
            <p className="text-center w-[90%] text-lg md:text-xl md:[80%]">
              If you're looking for a way to give gifts that are truly
              one-of-a-kind, Gift-It is the perfect place to start.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
