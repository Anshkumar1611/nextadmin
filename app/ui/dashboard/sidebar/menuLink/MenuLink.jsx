"use client";

import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex gap-2 items-center p-2 hover:bg-links hover:rounded-md cursor-pointer ${
        pathname === item.path && "bg-links rounded-md"
      }`}
    >
      <p className="text-sm">{item.icon}</p>
      <p className="text-sm">{item.title}</p>
    </div>
  );
};

export default MenuLink;
