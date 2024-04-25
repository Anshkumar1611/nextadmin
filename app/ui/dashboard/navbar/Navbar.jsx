"use client";
import { navItems } from "@/app/utils/data";
import { usePathname } from "next/navigation";
import { Search } from "../..";

const Navbar = () => {
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  return (
    <div className="flex justify-between items-center">
      <span>{path[0].toUpperCase() + path.slice(1)}</span>
      <section className="flex justify-evenly items-center gap-2 basis-1/4">
        <Search placeholder={"Search ..."} />
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <div key={item.id} className="cursor-pointer">
              {item.icon}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
