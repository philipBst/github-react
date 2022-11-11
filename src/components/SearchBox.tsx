import { FormEvent, useState } from "react";

import { sortTypes } from "../constants";

import type { Sort } from "../types";

export type SearchBoxProps = {
  handleSearch: (arg1: string, arg2: Sort) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<Sort>("stars");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch(query, sortBy);
  };

  return (
    <form
      className="flex w-full items-center overflow-hidden rounded-md"
      onSubmit={handleSubmit}
    >
      <select
        name="filter-repo"
        id="filter-repo"
        className="cursor-pointer bg-gray-700 p-2 outline-none"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as Sort)}
      >
        {sortTypes.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="search"
        id="search-input"
        className="w-full p-2 pl-4 text-slate-900 outline-none"
        placeholder="Search for repo..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 p-2 px-3 font-semibold tracking-wide hover:bg-blue-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
