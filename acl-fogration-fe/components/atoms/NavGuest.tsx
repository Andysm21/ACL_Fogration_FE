import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SelectMenuOption } from "../atoms/types";
import { CountrySelector } from "../molecules/Selector";
import { COUNTRIES } from "../atoms/countries";

const NavGuest = () => {
  const router = useRouter();
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState("DE");
  return (
    <div className="fixed z-40 flex h-16 w-full flex-row items-center justify-between bg-bc shadow-lg px-5">
        {/* <img className="w-16 " src="/Images/fogration-blue.png " alt="siteLogo" /> */}
        <div>
          <CountrySelector
            id={"countries"}
            ref={myRef}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={(val) => setCountry(val)}
            selectedValue={
              COUNTRIES.find(
                (option) => option.value === country
              ) as SelectMenuOption
            }
          />
        </div>
         
         {/* <div className="fixed z-40 flex h-16 w-full flex-row items-center justify-between bg-bc px-5 shadow-lg"> */}
        {/* <div className=" grid grid-cols-3 gap-12 relative top-0 left-0 right-0 ">
          <Link href="/guest/guestcourses">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              Courses
            </h1>
          </Link>
          <Link href="/guest/about-us">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              About us
            </h1>
          </Link>
          <Link href="/guest/pricing">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              Pricing
            </h1>
          </Link>
        </div> */}

      <div className="flex flex-row items-center gap-2">
       <Link href="/guest/login">
          <button className=" rounded-md border border-white px-4 py-2 text-white  hover:bg-white hover:text-darkgrey w-24 flex justify-items-center justify-center">
            Login
          </button>
        </Link>
        <Link href="/guest/signup">
            <button className=" bg-gradient-to-r border-violet-400 border from-purple to-babyblue rounded-md  px-4 py-2 text-white  w-24 ">Sign up</button>
           </Link>
        
      </div>
      </div>
   
  );
};

export default NavGuest;
