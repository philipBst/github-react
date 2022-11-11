import { GITHUB_SEARCH_REPOS_URL, GITHUB_GET_REPO_URL } from "./endpoints";

import type { IRepo, IRepoData } from "../interfaces";
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

export const getRepo = async (
  owner: string,
  repoName: string
): Promise<IRepo> => {
  const response = await fetch(GITHUB_GET_REPO_URL(owner, repoName));
  return response.json();
};
