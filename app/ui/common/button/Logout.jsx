import { signOut } from "@/app/auth";
import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="flex gap-2 items-center p-2 hover:bg-links hover:rounded-md -mt-6 cursor-pointer text-sm w-full">
        <MdLogout />
        Logout
      </button>
    </form>
  );
};

export default Logout;
