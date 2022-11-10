import { AiFillEye } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

export type RepoCardProps = {
  name: string;
  owner: {
    login: string;
  };
  forks_count: number;
  watchers: number;
  description: string;
  updated_at: string;
};

const RepoCard = () => (
  <li className="w-full min-h-max p-3 bg-slate-700 text-white">
    <h2>name</h2>
    <p>owner</p>
    <div className="grid grid-cols-2">
      <CgGitFork />
      123
    </div>
    <div className="grid grid-cols-2">
      <AiFillEye />
      123
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, facilis?
    </p>
    <p>2020-10-39</p>
  </li>
);

export default RepoCard;
