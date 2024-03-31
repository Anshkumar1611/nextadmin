import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex justify-start items-center gap-2 my-4">
      <Image
        src="/noavatar.png"
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
      />
      <section>
        <h4>Ansh Kumar</h4>
        <p className="text-xs">Administrator</p>
      </section>
    </div>
  );
};

export default Profile;
