import Link from "next/link";
import { MenuLink, Profile } from "../..";
import { menuItems } from "@/app/utils/data";

const Sidebar = () => {
  return (
    <div >
      <Profile />
      {menuItems.map((item) => (
        <div key={item.title} className="my-8">
          <p className="text-xs">{item.title}</p>
          {item.list.map((linkItem) => (
            <div key={linkItem.title} className="my-2">
              <Link href={linkItem.path}>
                <MenuLink item={linkItem} />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
