"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between items-center m-2">
      <button
        className={` text-primary rounded p-1 px-2 text-xs ${
          !hasPrev ? "bg-gray-500 cursor-not-allowed" : "bg-white"
        }`}
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
      >
        Previous
      </button>
      <button
        className={` text-primary rounded p-1 px-2 text-xs ${
          !hasNext ? "bg-gray-500 cursor-not-allowed" : "bg-white"
        }`}
        disabled={!hasNext}
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
