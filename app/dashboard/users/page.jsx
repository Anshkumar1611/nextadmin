import { Search } from "@/app/ui";

const UsersPage = () => {
  return (
    <div className="bg-secondary">
      <section>
        <Search placeholder={"Search for a user"} />
        <button className="bg-[#5d57c9] p-2 rounded cursor-pointer w-max">
          Add New
        </button>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default UsersPage;
