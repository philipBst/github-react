import { CgGitFork } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import { IRepo } from "../interfaces/IRepo.interface";

const RepoCard: React.FC<IRepo> = ({
  full_name,
  description,
  stargazers_count,
  forks,
  watchers,
  updated_at,
  owner: { avatar_url },
}) => (
  <li className="flex w-full items-center justify-between gap-2 divide-x rounded-md bg-slate-800 py-2 px-3">
    <img src={avatar_url} alt={full_name} className="w-28 rounded-full" />
    <div className="flex h-24 w-full flex-col gap-1 justify-between px-3 pl-2">
      <h2 className="text-blue-50">
        <a href="#" className="text-lg text-blue-500 hover:underline">
          {full_name}
        </a>
      </h2>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="flex max-w-max gap-3 items-center justify-between">
        <div className="flex gap-1 items-center max-w-max text-gray-400">
          <FaRegStar />
          <span className="text-xs">{stargazers_count}</span>
        </div>
        <div className="flex gap-1 items-center max-w-max text-gray-400">
          <CgGitFork />
          <span className="text-xs">{forks}</span>
        </div>
        <div className="flex gap-1 items-center max-w-max text-gray-400">
          <AiFillEye />
          <span className="text-xs">{watchers}</span>
        </div>
        <span className="text-xs text-gray-400">Updated at: {updated_at}</span>
      </div>
    </div>
  </li>
);

export default RepoCard;
