"use client";

import { navItems } from "@/app/utils/data";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center">
      <span>Dashboard</span>
      <section className="flex justify-evenly items-center gap-2 basis-1/4">
        <div className="flex items-center bg-links p-2 gap-2 rounded-lg ">
          <MdSearch />
          <input
            type="text"
            placeholder="Search ..."
            className="border-none focus:outline-none text-soft w-32 bg-transparent placeholder:text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <div key={item.id} className="cursor-pointer">{item.icon}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
