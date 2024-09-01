"use client";
import Image from "next/image";
import Link from "next/link.js";
import { useRef, useState } from 'react';

export default function Home() {
  const Home = useRef(null);
  const About = useRef(null);
  const Featuring = useRef(null);
  const Menu = useRef(null);
  const Contact = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState(0);

  const handleClick = () => {
    setCart(prev => prev + 1)
  };

  const HandleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  const menu = [
    {
      img: "/menu/pizza.png",
      name: "Pizza"
    },
    {
      img: "/menu/fries.png",
      name: "Fries"
    },
    {
      img: "/menu/sandwich.png",
      name: "Sandwich"
    },
    {
      img: "/menu/pancake.png",
      name: "Pancake"
    },
    {
      img: "/menu/strawberry-cake.png",
      name: "Cake"
    },
    {
      img: "/menu/cinnamon.png",
      name: "Cinnamon"
    },
    {
      img: "/menu/salad.png",
      name: "Veg Salad"
    },
    {
      img: "/menu/juice.png",
      name: "Juice"
    },
  ]

  const ScrollToHome = () => {
    Home.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const ScrollToAbout = () => {
    About.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const ScrollToFeaturing = () => {
    Featuring.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const ScrollToMenu = () => {
    Menu.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const ScrollToContact = () => {
    Contact.current.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  return (
    <div className="relative">
      {/* HamBurger */}
      {toggle && (
        <div className=" z-[102] bg-black text-white text-[10px] sm:text-xs fixed sm:left-1/2 flex flex-col gap-5 justify-center items-center left-0 right-0 py-2 px-3 ">
          <button onClick={ScrollToHome} className="hover:bg-orange-500 hover:text-black rounded-full p-2 w-[200px]">
            Home
          </button>
          <button onClick={ScrollToAbout} className="hover:bg-orange-500 hover:text-black rounded-full p-2 w-[200px]">
            About
          </button>
          <button onClick={ScrollToFeaturing} className="hover:bg-orange-500 hover:text-black rounded-full p-2 w-[200px]">
            Featuring
          </button>
          <button onClick={ScrollToMenu} className="hover:bg-orange-500 hover:text-black rounded-full p-2 w-[200px]">
            Menu
          </button>
          <button onClick={ScrollToContact} className="hover:bg-orange-500 hover:text-black rounded-full p-2 w-[200px]">
            Contact
          </button>
          <button onClick={HandleToggle}>
          <Image
            className="rotate-180"
            src="/icons/down-arrow_white.png"
            height={20}
            width={20}
            alt="arrow"
          />
          </button>
        </div>
      )}

      {/* Hamburger */}
      <div className="sm:invisible z-[101] bg-black/70 text-white text-[10px] sm:text-xs left-[5px] sm:left-[20px] top-[20px] transform fixed flex gap-5 rounded-full py-3 px-5 ">
        <button onClick={HandleToggle} className="">
          <Image className="hover:scale-110" src="/icons/hamburger-menu.png" width={20} height={20} alt="User" />
        </button>

      </div>

      {/* NavBar */}
      <div className="invisible sm:visible z-50 bg-black/70 text-white text-[10px] sm:text-xs left-[5px] sm:left-1/2 top-[20px] transform sm:-translate-x-1/2 fixed flex gap-5 rounded-full py-2 px-3  hover:scale-110">
        <button onClick={ScrollToHome} className="hover:bg-orange-500 hover:text-black rounded-full p-2">
          Home
        </button>
        <button onClick={ScrollToAbout} className="hover:bg-orange-500 hover:text-black rounded-full p-2">
          About
        </button>
        <button onClick={ScrollToFeaturing} className="hover:bg-orange-500 hover:text-black rounded-full p-2">
          Featuring
        </button>
        <button onClick={ScrollToMenu} className="hover:bg-orange-500 hover:text-black rounded-full p-2">
          Menu
        </button>
        <button onClick={ScrollToContact} className="hover:bg-orange-500 hover:text-black rounded-full p-2">
          Contact
        </button>
      </div>

      {/* Side Profile & Cart */}
      <div className="z-[101] bg-black/70 text-white text-[10px] sm:text-xs right-[5px] sm:right-[20px] top-[20px] transform fixed flex gap-5 rounded-full py-3 px-5 ">
        <Image className="hover:scale-110" src="/icons/user.png" width={20} height={20} alt="User" />
        <div className="relative">
          <Image className="hover:scale-110" src="/icons/grocery-store.png" width={20} height={20} alt="Cart" />
          {cart <= 0 ? "" : <div className="absolute bg-black w-5 h-5 rounded-full text-white flex  justify-center items-center border-2 border-white -top-[10px] -right-[10px]">{cart}</div>}
        </div>
      </div>

      {/* First Page - Home */}
      <div ref={Home} className=" bg-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="mt-0 sm:mt-5 z-10 flex flex-col gap-5">
          <div>
            <div className=" text-white flex flex-col justify-center items-center ">
              <div className="tracking-widest sm:tracking-20 text-3xl sm:text-5xl font-extralight">SPECIAL</div>
              <div className="text-7xl sm:text-9xl font-extrabold">BURGERS</div>
              <div className="tracking-widest sm:tracking-20 text-2xl sm:text-4xl font-extralight">FOR A LIMITED TIME</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="text-white text-xs sm:text-base">Delivery Partners</div>
            <div className="flex justify-center items-center gap-2 w-[40px] md:w-full">
              <Image src="/icons/zomato-fix.png" width={60} height={60} alt="Zomato" />
              <Image src="/icons/swiggy-fix.png" width={50} height={50} alt="Zomato" />
            </div>
          </div>
        </div>

        <Image
          className="object-cover scale-100 sm:object-contain sm:-translate-x-10  sm:scale-150 opacity-60"
          src="/home-burger-fit.png"
          fill={true}
          alt="Background Image"
        />

        <button onClick={ScrollToAbout}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Second Page - About */}
      <div ref={About} className=" bg-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="mt-0 sm:mt-5 z-10 flex flex-col gap-5">
          <div className="text-white flex flex-col gap-5">
            <div className="text-6xl sm:text-9xl font-extrabold tracking-widest sm:tracking-50 w-[400px] sm:w-[800px]">ABOUT</div>
            <div className="leading-loose w-[200px] sm:w-[300px] text-xs sm:text-xl">Enjoy our delicious burgers. <br /><br />We use top-quality ingredients to create mouth watering meals that satisfy  your taste buds and elevate your dining experience.</div>
          </div>

        </div>
        <Image
          className="absolute z-10 -right-[200px] sm:-top-[80px] sm:-right-[300px]"
          src="/flying-burger-2.png"
          width={1000}
          height={1000}
          alt="Background Image"
        />

        <Image
          className="object-cover scale-100 sm:object-contain sm:-translate-x-10  sm:scale-150 opacity-60"
          src="/backgrounds/bg-black-right.png"
          fill={true}
          alt="Front-Burger"
        />

        <button className="z-20" onClick={ScrollToFeaturing}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>


      {/* Third Page - Featuring */}
      <div ref={Featuring} className="z-[100] bg-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className=" text-white mt-5 mb-20 sm:mt-5 sm:mb-20 z-10 flex flex-col gap-5 justify-center items-center">
          <div className="tracking-widest sm:tracking-20 text-3xl sm:text-5xl font-extrabold">FEATURING</div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 justify-center items-start gap-10">

            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="w-[250px] relative">
                <Image className="absolute scale-75 bottom-0 -right-[58px]" src="/discount-tag.png" width={250} height={250} alt="Discount tag" />
                <Image className="rounded-3xl" src="/burger-1.png" width={1000} height={1000} loading="lazy" alt="burger-1" />
              </div>
              <div className="text-2xl font-bold">Burger + Fries</div>
              <div className="text-xs w-[200px] text-center h-[60px]">A classic combo of a juicy burger and crispy French fries, perfect for a  satisfying meal.</div>
              <button onClick={handleClick} className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="w-[250px] relative">
                <Image className="absolute scale-75 bottom-0 -right-[58px]" src="/discount-tag.png" width={250} height={250} alt="Discount tag" />
                <Image className="rounded-3xl" src="/burger-2.png" width={1000} height={1000} loading="lazy" alt="burger-2" />
              </div>
              <div className="text-2xl font-bold">Double Patty Burger</div>
              <div className="text-xs w-[200px] text-center h-[60px]">A hearty double patty burger stacked with two juicy beef patties, topped with fresh ingredients and melted cheese.</div>
              <button onClick={handleClick} className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="w-[250px] relative">
                <Image className="absolute scale-75 bottom-0 -right-[58px]" src="/discount-tag.png" width={250} height={250} alt="Discount tag" />
                <Image className="rounded-3xl" src="/burger-3.png" width={1000} height={1000} loading="lazy" alt="burger-3" />
              </div>
              <div className="text-2xl font-bold">Heavy Stuffed Burger</div>
              <div className="text-xs w-[200px] text-center h-[60px]">A loaded burger bursting with rich fillings  and toppings, delivering an indulgent and flavorful experience in every bite.</div>
              <button onClick={handleClick} className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
            </div>

          </div>

        </div>
        <Image
          className="absolute opacity-40 sm:scale-75 -right-[200px] top-[1100px] sm:top-[50px] sm:-right-[400px]"
          src="/flying-burger-1.png"
          width={1000}
          height={1000}
          alt="Background Props - Burger"
        />
        <Image
          className="absolute opacity-40 sm:scale-75 -left-[200px] -top-[100px] sm:-top-[200px] sm:-left-[300px]"
          src="/flying-french-fries.png"
          width={1000}
          height={1000}
          alt="Background Props - Fries"
        />

        <Image
          className="object-cover scale-100 sm:object-contain sm:-translate-x-10  sm:scale-150 opacity-60"
          src="/backgrounds/bg-black-right.png"
          fill={true}
          alt="Background Image"
        />

        <button className="z-20" onClick={ScrollToMenu}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Fourth Page - Menu */}
      <div ref={Menu} className="z-[100] bg-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className=" text-white mt-10 mb-28 sm:mt-10 sm:mb-28 z-10 flex flex-col gap-5 justify-center items-center">
          <div className="tracking-widest sm:tracking-20 text-3xl sm:text-5xl font-extrabold">EXPLORE MENU</div>
          <div className=" grid grid-cols-1 sm:grid-cols-4  justify-center items-start gap-10">
            {menu.map((value, index) => (
              <div key={index} className="flex flex-col justify-center items-center gap-3">
                <div className="w-[200px] relative">
                  <Image
                    className="rounded-3xl"
                    src={value.img}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    alt={value.name}
                  />
                </div>
                <div className="text-2xl font-bold">{value.name}</div>
                <button onClick={handleClick} className="text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

        </div>
        <Image
          className="absolute opacity-40 sm:scale-75 -right-[200px] top-[1100px] sm:top-[50px] sm:-right-[400px]"
          src="/flying-burger-1.png"
          width={1000}
          height={1000}
          alt="Background Props - Burger"
        />
        <Image
          className="absolute opacity-40 sm:scale-75 -left-[200px] -top-[100px] sm:-top-[200px] sm:-left-[300px]"
          src="/flying-french-fries.png"
          width={1000}
          height={1000}
          alt="Background Props - Fries"
        />

        <Image
          className="object-cover scale-100 sm:object-contain sm:-translate-x-10  sm:scale-150 opacity-60"
          src="/backgrounds/bg-black-right.png"
          fill={true}
          alt="Background Image"
        />

        <button className="z-20" onClick={ScrollToContact}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/icons/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Last Page - Contact */}
      <div ref={Contact} className=" bg-black min-h-screen relative flex justify-center items-center overflow-hidden">
        <div className="mt-0 sm:mt-5 z-10 flex flex-col gap-5">
          <div>
            <div className=" text-white flex flex-col justify-center items-center ">
              <div className="tracking-10-no-margin text-[8px] sm:text-[13px] font-extralight">Thank You For Visiting</div>
              <div className="tracking-20-no-margin text-2xl sm:text-6xl font-extrabold">CONTACT US</div>
              <div className="absolute bottom-[10px] text-xs sm:text-[10px] font-extralight">Made by @itsmeprinceyt</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-2 text-white">
            <Link
              className="scale-75 hover:scale-100 border-2 border-orange-500 p-4 rounded-full"
              href="https://www.linkedin.com/in/mohduvaish" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span></Link>
            <Link
              className="scale-75 hover:scale-100 border-2 border-orange-500 p-4 rounded-full"
              href="https://github.com/itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span></Link>
            <Link
              className="scale-75 hover:scale-100 border-2 border-orange-500 p-4 rounded-full"
              href="https://www.instagram.com/itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span></Link>
            <Link
              className="scale-75 hover:scale-100 border-2 border-orange-500 p-4 rounded-full"
              href="https://www.youtube.com/@itsmeprinceyt" target="_blank"><span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512">
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </span></Link>
          </div>
        </div>

        <Image
          className="object-cover scale-100 sm:object-contain sm:-translate-x-10  sm:scale-150 opacity-60"
          src="/backgrounds/bg-black.png"
          fill={true}
          alt="Background Image"
        />

      </div>

    </div>
  );
}
