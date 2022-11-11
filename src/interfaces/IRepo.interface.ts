export interface IRepo {
  name: string;
  full_name: string;
  description: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  open_issues: number;
}

export interface IRepoData {
  total_count: number;
  incomplete_results: boolean;
  items: IRepo[];
}
