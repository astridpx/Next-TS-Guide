"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchMainPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const HandleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");

    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={HandleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter search here.."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-1 font-semibold rounded bg-blue-500"
      >
        Search
      </button>
    </form>
  );
}
