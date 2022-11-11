import { useState, useCallback, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import { Container, AppHeader, SearchBox, RepoCard } from "../components";

import { searchReposBy } from "../api/methods";
import { maxResultsPerFetch } from "../constants";
import { isEmptyArray } from "../utils/array-utils";

import type { IRepoData } from "../interfaces";
import type { Sort } from "../types";

const initialState: IRepoData = {
  total_count: 0,
  incomplete_results: false,
  items: [],
};

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<Sort>("stars");
  const [data, setData] = useState<IRepoData>(initialState);

  const handleSearch = useCallback(
    async (query: string, sort: Sort) => {
      const data = await searchReposBy(query, maxResultsPerFetch, sort, page);
      setData(data);
      setQuery(query);
      setSortBy(sort);
    },
    [page]
  );

  const nextPage = useCallback(async () => {
    const data = await searchReposBy(
      query,
      maxResultsPerFetch,
      sortBy,
      page + 1
    );
    setData(data);
    setPage((page) => page + 1);
  }, [query, sortBy, page]);

  const prevPage = useCallback(async () => {
    const data = await searchReposBy(
      query,
      maxResultsPerFetch,
      sortBy,
      page - 1
    );
    setData(data);
    setPage((page) => page - 1);
  }, [query, sortBy, page]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Container>
        <AppHeader />
      </Container>
      <Container>
        <SearchBox handleSearch={handleSearch} />
      </Container>
      <Container>
        <ul className="max-h-[30rem] overflow-x-hidden flex flex-col gap-2 overflow-y-auto">
          {data.items.map((repo) => (
            <RepoCard key={repo.id} {...repo} />
          ))}
        </ul>
      </Container>
      {!isEmptyArray(data.items) && (
        <Container>
          <div className="w-full flex items-center justify-between pt-4 border-t-2 border-gray-400">
            <span className="text-xs text-gray-400">
              Total Results: {data.total_count || 0} | Showing{" "}
              {maxResultsPerFetch} results
            </span>
            <div className="flex items-center justify-between gap-4 max-w-max">
              <button className="bg-white p-1 rounded-md" onClick={prevPage}>
                <GrPrevious />
              </button>
              <span>
                Page {page} of{" "}
                {Math.floor(data.total_count / maxResultsPerFetch)}
              </span>
              <button className="bg-white p-1 rounded-md" onClick={nextPage}>
                <GrNext />
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Home;
