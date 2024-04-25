import { fetchUser } from "@/app/lib/data";
import SingleUserForm from "@/app/ui/common/forms/SingleuserForm";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className="flex justify-start gap-8">
      <section className="bg-secondary p-4 rounded-md">
        <Image
          src={user.img || "/noavatar.png"}
          height={250}
          width={250}
          alt="profile"
          className="rounded-md"
        />
        <p className="my-2 text-sm">{user.username}</p>
      </section>
      <section className="flex-1">
        <SingleUserForm user={user} />
      </section>
    </div>
  );
};

export default SingleUserPage;
