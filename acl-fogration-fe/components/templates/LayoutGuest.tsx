import React, { useEffect, useState } from "react";
import NavGuest from "../atoms/NavGuest";
import { NextRouter, useRouter } from "next/router";
import { CountrySelector } from "../molecules/Selector";

interface Props {
  children: JSX.Element | JSX.Element[];

  // links: {
  //   href: string;
  //   label: string;
  // }[];
}

const LayoutGuest: React.FC<Props> = ({ children }) => {
  const [links, setLinks] = useState([] as any);
  const router = useRouter();

  return (
    <div className="relative top-0 left-0 right-0">
      
      <NavGuest />
      <div className="flex pt-16">
        
        
        <div className={"w-[100%]"}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutGuest;
