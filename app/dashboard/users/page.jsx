import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import { MainButton, Pagination, Search } from "@/app/ui";
import { usersTableHeadings } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);
  return (
    <div className="bg-secondary p-4">
      <section className="flex justify-between items-center mb-2">
        <Search placeholder={"Search for a user"} />
        <Link href="/dashboard/users/add">
          <MainButton text={"Add New"} />
        </Link>
      </section>
      <section>
        <table className="w-full">
          <thead>
            <tr className="text-sm text-start px-2">
              {usersTableHeadings.map((heading, i) => (
                <th key={i} className="text-start py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  className="text-sm text-start hover:bg-links px-2 rounded-lg"
                  key={user.id}
                >
                  <td>
                    <div className="flex items-center justify-start gap-2 py-2">
                      <Image
                        src={user.img || "/noavatar.png"}
                        alt="pic"
                        width={25}
                        height={25}
                        className="rounded-full"
                      />
                      {user.username}
                    </div>
                  </td>
                  <td>
                    <span className="py-2">{user.email}</span>
                  </td>
                  <td className="py-2">
                    {user.createdAt.toString().slice(4, 16)}
                  </td>
                  <td className="py-2">{user.isAdmin ? "Admin" : "Client"}</td>
                  <td className="py-2">
                    {user.isActive ? "active" : "passive"}
                  </td>
                  <td className="py-2 flex gap-2 items-center">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="bg-teal-700 cursor-pointer p-1 px-2 rounded-md text-xs">
                        view
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input
                        className="hidden"
                        type="text"
                        name="id"
                        value={user.id}
                      />
                      <button className="bg-red-700 cursor-pointer p-1 px-2 rounded-md text-xs">
                        delete
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <Pagination count={count} />
      </section>
    </div>
  );
};

export default UsersPage;
