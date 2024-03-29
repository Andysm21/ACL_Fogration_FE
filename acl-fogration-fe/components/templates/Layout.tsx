import Sidebar from "./../../components/molecules/Sidebar";
import React, { useEffect, useState } from "react";
import Nav from "../atoms/Nav";
import { NextRouter, useRouter } from "next/router";
import { CountrySelector } from "../molecules/Selector";

interface Props {
  children: JSX.Element | JSX.Element[];

  // links: {
  //   href: string;
  //   label: string;
  // }[];
}
const handleClick = () => {
  localStorage.setItem("popularCourses","false")
};

const userlinks = [
  // { href: '/meetings', label: 'Dashboard' },
  { href: "/user", label: "Home" },
  { href: "/user/profile", label: "Profile" },
  { href: "/user/courses", label: "Courses" , onclick:{handleClick}},
  { href: "/user/mycourses", label: "My Courses" },
  { href: "/user/wallet", label: "Wallet" },
  { href: "/user/reports", label: "Reports" },

  // { href: '/meetings/facilities', label: 'Facilities' },
];

const instructorlinks = [
  // { href: '/car-system', label: 'Dashboard' },
  { href: "/instructor", label: "Home" },
  { href: "/instructor/profile", label: "Profile" },
  { href: "/instructor/courses", label: "Courses", },
  { href: "/instructor/mycourses", label: "My Courses" },
  { href: "/instructor/reports", label: "Reports"},
];

const adminlinks = [
  // { href: '/car-system', label: 'Dashboard' },
  { href: "/admin", label: "Home" },
  { href: "/admin/accounts", label: "Accounts" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/refunds", label: "Refund Requests" },
  { href: "/admin/corporateRequests", label: "Corporate Requests" },

];

const guestlinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  
]



const tabs:
  | {
      key: string;
      links: { href: string; label: string }[];
    }[]
  | [] = [
  { key: "user", links: userlinks },
  { key: "instructor", links: instructorlinks },
  { key: "admin", links: adminlinks },
];

const Layout: React.FC<Props> = ({ children }) => {
  const [links, setLinks] = useState([] as any);
  const router = useRouter();

  return (
    <div className="relative top-0 left-0 right-0">
      <div className="grid grid-cols-3 gap-12">
      <Nav links={
            tabs.find((tab) => router.pathname.includes(tab.key))?.links || []
          } />
      {/* <div className="flex pt-16">
        <Sidebar
          links={
            tabs.find((tab) => router.pathname.includes(tab.key))?.links || []
          }
        /> */}
        </div>

        <div className={"pt-16 w-[100%]"}>{children}</div>
      {/* </div> */}
    </div>
  );
};

export default Layout;
