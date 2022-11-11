import { Sortable } from "./types";

export const APP_NAME = "RepoFinder";
export const sortTypes: Sortable[] = [
  { name: "Stars", value: "stars" },
  { name: "Forks", value: "forks" },
  { name: "Help Wanted Issues", value: "help-wanted-issues" },
  { name: "Updated", value: "updated" },
];
export const maxResultsPerFetch = 25;
