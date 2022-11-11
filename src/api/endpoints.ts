import { Sort } from "../types";

export const GITHUB_API_BASE_URL = "https://api.github.com";

export const GITHUB_SEARCH_REPOS_URL = (
  q: string,
  per_page: number,
  sort: Sort,
  page: number
) =>
  `${GITHUB_API_BASE_URL}/search/repositories?q=${q}&per_page=${per_page}&sort=${sort}&page=${page}`;

export const GITHUB_GET_REPO_URL = (owner: string, repo: string) =>
  `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}`;
