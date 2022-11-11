export type Sort = "stars" | "forks" | "help-wanted-issues" | "updated";

export type Sortable = {
  name: string;
  value: Sort;
};
