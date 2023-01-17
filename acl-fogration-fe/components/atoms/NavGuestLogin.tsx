import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SelectMenuOption } from "../atoms/types";
import { CountrySelector } from "../molecules/Selector";
import { COUNTRIES } from "../atoms/countries";

const NavGuestLogin = () => {
  const router = useRouter();
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState("DE");
  return (
    <div className="fixed z-40 flex h-16 w-full flex-row  justify-between items-center px-4 bg-bc shadow-lg">
       
        <div className=" flex flex-row  items-center justify-start">
        
          <h1 className="text-violet-400 text-4xl font-bold ">Fogr</h1>
          <h1 className="text-white  text-4xl font-bold">-ation</h1>
          </div>
        <span className=" text-white text-2xl">Check our <Link className="text-violet-400" href="/guest/guestcourses">courses</Link> </span>
          <div className="flex flex-row justify-center gap-2">
 <Link href="/guest/login">
            <button className=" rounded-md border border-white px-4 py-2 text-white   w-24 ">Login</button>
          </Link>
            <Link href="/guest/signup">
            <button className=" bg-gradient-to-r border-violet-400 border from-purple to-babyblue rounded-md  px-4 py-2 text-white  w-24 ">Sign up</button>
           </Link>
          

          </div>
    </div>
  );
};

export default NavGuestLogin;
