"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("q", e.target.value);
      params.set("page",1)
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  },500);
  return (
    <div className="flex items-center bg-links p-2 gap-2 rounded-lg ">
      <MdSearch />
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="border-none text-xs focus:outline-none text-soft w-32 bg-transparent placeholder:text-xs"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
