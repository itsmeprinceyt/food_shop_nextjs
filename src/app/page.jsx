"use client";
import Image from "next/image";
import Link from "next/link.js";
import { useRef } from 'react';

export default function Home() {
  const Home = useRef(null);
  const About = useRef(null);
  const Featuring = useRef(null);
  const Menu = useRef(null);
  const Contact = useRef(null);

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
  };

  const ScrollToAbout = () => {
    About.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToFeaturing = () => {
    Featuring.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToMenu = () => {
    Menu.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToContact = () => {
    Contact.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">

      {/* NavBar */}
      <div className="z-50 bg-black/70 text-white text-[10px] sm:text-xs left-[5px] sm:left-1/2 top-[20px] transform sm:-translate-x-1/2 fixed flex gap-5 rounded-full py-2 px-3  hover:scale-110">
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
      <div className="z-50 bg-black/70 text-white text-[10px] sm:text-xs right-[5px] sm:right-[20px] top-[20px] transform fixed flex gap-5 rounded-full py-3 px-5 ">
        <Image className="hover:scale-110" src="/icons/user.png" width={20} height={20} alt="User" />
        <Image className="hover:scale-110" src="/icons/grocery-store.png" width={20} height={20} alt="Cart" />
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
              <button className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="w-[250px] relative">
                <Image className="absolute scale-75 bottom-0 -right-[58px]" src="/discount-tag.png" width={250} height={250} alt="Discount tag" />
                <Image className="rounded-3xl" src="/burger-2.png" width={1000} height={1000} loading="lazy" alt="burger-2" />
              </div>
              <div className="text-2xl font-bold">Double Patty Burger</div>
              <div className="text-xs w-[200px] text-center h-[60px]">A hearty double patty burger stacked with two juicy beef patties, topped with fresh ingredients and melted cheese.</div>
              <button className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="w-[250px] relative">
                <Image className="absolute scale-75 bottom-0 -right-[58px]" src="/discount-tag.png" width={250} height={250} alt="Discount tag" />
                <Image className="rounded-3xl" src="/burger-3.png" width={1000} height={1000} loading="lazy" alt="burger-3" />
              </div>
              <div className="text-2xl font-bold">Heavy Stuffed Burger</div>
              <div className="text-xs w-[200px] text-center h-[60px]">A loaded burger bursting with rich fillings  and toppings, delivering an indulgent and flavorful experience in every bite.</div>
              <button className=" text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">Add to Cart</button>
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
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  justify-center items-start gap-10">
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
                <button className="text-[14px] bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 active:opacity-50">
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

      <div ref={Contact}>Contact</div>
    </div>
  );
}
