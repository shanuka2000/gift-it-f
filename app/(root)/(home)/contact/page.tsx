import React from "react";

const Contact = () => {
  return (
    <main className="flex items-center justify-center w-full py-12 max-w-screen-2xl ">
      <section className="w-[90%] md:w-[85%] min-h-[35rem] flex flex-col items-center justify-around pt-[2.5rem] md:flex-row">
        <div className="flex-1 flex flex-col gap-3 md:gap-5">
          <div className="flex items-center justify-center gap-2 md:flex-col md:items-start md:gap-4">
            <h2 className="text-3xl md:text-6xl">Fill out the form.</h2>
            <h2 className="text-3xl md:text-6xl">It's super easy.</h2>
          </div>
          <p className="text-center text-sm md:text-left md:text-lg">
            Your suggestions help us to improve the platform. So don't hesitate
            to contact us.
          </p>
        </div>
        <div></div>
        <div className="hidden w-[0.8px] h-[25rem] mx-[2rem] rounded-full bg-black/25 md:block"></div>
        <div className="flex-1 flex flex-col justify-center w-full">
          <form>
            <div className="flex flex-col mb-4">
              <label>Name</label>
              <input
                type="text"
                className="h-8 w-full px-2 border border-black rounded-md md:h-11 text-sm md:text-lg"
              />
            </div>
            <div className="flex flex-col md:items-center md:justify-between mb-4 gap-2 md:flex-row">
              <div className="flex flex-col flex-1 mb-4 md:mb-0">
                <label>Email</label>
                <input
                  type="text"
                  className="h-8 w-full px-2 border border-black rounded-md md:h-11 text-sm md:text-lg"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>Subject</label>
                <input
                  type="text"
                  className="h-8 w-full px-2 border border-black rounded-md md:h-11 text-sm md:text-lg"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 flex-1">
              <label>Message</label>
              <textarea className="h-[10rem] w-full px-2 py-2 border border-black rounded-md text-sm md:text-lg"></textarea>
            </div>
            <div className="flex-1 flex items-center justify-center md:justify-end">
              <button className="w-[10rem] h-[3rem] bg-black text-white rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
