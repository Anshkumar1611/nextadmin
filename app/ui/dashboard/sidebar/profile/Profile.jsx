import Image from "next/image";

const Profile = ({ user }) => {
  return (
    <div className="flex justify-start items-center gap-2 my-2">
      <div
        className="rounded-full overflow-hidden"
        style={{ width: 50, height: 50 }}
      >
        <Image
          src={user.img || "/noavatar.png"}
          alt="profile"
          width={50}
          height={50}
          className="h-full"
        />
      </div>
      <section>
        <h4>{user.username}</h4>
        <p className="text-xs">Administrator</p>
      </section>
    </div>
  );
};

export default Profile;
