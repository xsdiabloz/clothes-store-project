"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex justify-end items-center text-sm gap-2 text-gray-500 my-6">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldset</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
