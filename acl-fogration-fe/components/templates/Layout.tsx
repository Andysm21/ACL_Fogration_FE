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

const userlinks = [
  // { href: '/meetings', label: 'Dashboard' },
  { href: "/user", label: "Dashboard" },
  { href: "/user/profile", label: "Profile" },
  { href: "/user/courses", label: "Courses" },
  { href: "/user/mycourses", label: "My Courses" },

  // { href: '/meetings/facilities', label: 'Facilities' },
];

const instructorlinks = [
  // { href: '/car-system', label: 'Dashboard' },
  { href: "/instructor", label: "Dashboard" },
  { href: "/instructor/courses", label: "Courses" },
  { href: "/instructor/mycourses", label: "My Courses" },
  { href: "/instructor/contracts", label: "Contracts" },
];
const adminlinks = [
  // { href: '/car-system', label: 'Dashboard' },
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/accounts", label: "Accounts" },
  { href: "/admin/courses", label: "Courses" },
  // { href: "admin/requests", label: "Requests" },
];

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
      
      <Nav />
      <div className="flex pt-16">
        <Sidebar
          links={
            tabs.find((tab) => router.pathname.includes(tab.key))?.links || []
          }
        />

        <div className={"ml-[15%] w-[85%]"}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
