export interface IRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  open_issues: number;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
  };
  default_branch: string;
}

export interface IRepoData {
  total_count: number;
  incomplete_results: boolean;
  items: IRepo[];
}
