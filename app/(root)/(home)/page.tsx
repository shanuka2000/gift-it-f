import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-center w-full py-12 max-w-screen-2xl">
      <section className="flex flex-col items-center w-full pt-[2.5rem] md:flex-row">
        <div className="flex flex-col items-center justify-center gap-[1rem] min-h-[20rem] md:min-h-[32rem] md:items-start px-10">
          <h1 className="text-[5rem] md:text-[10rem]">gift-it.com</h1>
          <h2 className="text-center text-sm md:text-lg md:font-semibold">
            Send a gift that's as unique as the person you're giving it to.
          </h2>
          <Link href="/shop">
            <span className="w-[10rem] h-10 flex items-center justify-center mt-3 bg-gradient-to-r from-[#ffc73b] to-[#ff4440] focus:scale-110 hover:scale-110 transition-all text-white font-extrabold rounded-md">
              Visit our Shop
            </span>
          </Link>
        </div>
        <div className="relative h-[15rem] flex-1 flex items-center justify-center">
          <Image
            src="/bg-hero.png"
            alt="hero-image"
            width={400}
            height={100}
            className="hidden md:block"
          />
          <div className="relative h-[15rem] flex items-center justify-between gap-16 md:hidden">
            <Image src="/gift-box.png" alt="gift-box" width={100} height={50} />
            <Image src="/gift.png" alt="gift" width={100} height={50} />
            <Image src="/delivery.png" alt="delivery" width={100} height={50} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
