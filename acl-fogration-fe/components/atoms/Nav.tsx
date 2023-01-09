import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { SelectMenuOption } from '../atoms/types';
import {CountrySelector} from '../molecules/Selector';
import {COUNTRIES} from '../atoms/countries';
import axios from 'axios';

interface Props {
  links:
    | {
        href: string;
        label: string;
      }[]
    | [];
}

const Nav: React.FC<Props> = ({ links }) => {
  const router = useRouter();
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');
  const [name, setName] = useState("");

  function login(){
    var id=Number(localStorage.getItem("user_id" ));
    var type=localStorage.getItem("Type");
    if(type==("Corp")){
      axios.post("http://localhost:8000/NameCorp",{
        UserID:id
      }
     ).then((response) => {
       setName(response.data)
     }).catch((error) => console.log(error))
      // setName("Corp");
    }
    else if(type=="User"){
      axios.post("http://localhost:8000/NameInd",{
        UserID:id
      }
     ).then((response) => {
       setName(response.data)
     }).catch((error) => console.log(error))
      // setName("Ind");
    }
    else if(type=="Admin"){
      setName("Admin");
    }
    else if(type=="Instructor"){
      axios.post("http://localhost:8000/NameInst",{
        UserID:id
      }
     ).then((response) => {
       setName(response.data)
     }).catch((error) => console.log(error))
      // setName("Instructor");
    }
  }
  useEffect(() => {
    login();
        
  })
  return (
    <div className="fixed z-40 flex h-16 w-full flex-row items-center justify-between bg-bc px-5 shadow-lg">
      <div className="flex gap-8">
        {/* <img className="w-16 " src="/Images/fogration-blue.png " alt="siteLogo" /> */}
        <div>
          <CountrySelector
          id={'countries'}
          ref={myRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={val => setCountry(val)}
          selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
        />
          </div>
        <div className="flex items-center gap-4 px-8">
          {/* <Link href="/user">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              Users
            </h1>
          </Link>
          <Link href="/instructor">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              Instructors
            </h1>
          </Link>
          <Link href="/admin">
            <h1 className="cursor-pointer border-b-lightgrey  text-lg font-light  text-white hover:border-b hover:text-gray-300">
              Admins
            </h1>
          </Link> */}

        {links.map((link, index) => (
        <Link href={link.href} passHref key={index} legacyBehavior>
          <a
            className="cursor-pointer border-b-lightgrey px-2 text-lg font-light  text-white hover:border-b hover:text-gray-300"
          >
            {link.label}
          </a>
        </Link>
      ))}
        </div>
      </div>
      <div className="flex flex-row items-center ">
        <h1 className=" mx-4 border-r border-r-white px-4 py-1  font-light text-white ">
          Hello, {name}{" "}
        </h1>

        <Link href="/guest/login">
          <button className=" rounded-md border border-white px-4 py-2 text-white  hover:bg-white hover:text-darkgrey">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
