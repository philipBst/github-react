import { GITHUB_SEARCH_REPOS_URL } from "./endpoints";

import type { IRepoData } from "../interfaces";
import type { Sort } from "../types";

export const searchReposBy = async (
  q: string,
  per_page: number,
  sort: Sort,
  page: number
): Promise<IRepoData> => {
  const response = await fetch(
    GITHUB_SEARCH_REPOS_URL(q, per_page, sort, page)
  );
  return response.json();
};
