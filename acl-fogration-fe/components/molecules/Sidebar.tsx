import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
interface Props {
  links:
    | {
        href: string;
        label: string;
      }[]
    | [];
}

const Sidebar: React.FC<Props> = ({ links }) => {
  const router = useRouter();

  return (
    <div className="fixed z-30 flex  h-[calc(100vh-64px)] w-[15%] flex-col justify-start bg-white pb-3 text-left   text-black shadow-lg">
      {links.map((link, index) => (
        <Link href={link.href} passHref key={index} legacyBehavior>
          <a
            className={`${
              router.pathname.split('/').pop() ===
              (link.href.split('/').pop() || '')
                ? 'bg-gray-200'
                : ''
            } py-5 pl-8 hover:bg-lightgrey hover:text-darkgrey `}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
