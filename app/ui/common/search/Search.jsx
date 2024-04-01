import { MdSearch } from "react-icons/md";

const Search = ({placeholder}) => {
  return (
    <div className="flex items-center bg-links p-2 gap-2 rounded-lg ">
      <MdSearch />
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="border-none focus:outline-none text-soft w-32 bg-transparent placeholder:text-sm"
      />
    </div>
  );
};

export default Search;
