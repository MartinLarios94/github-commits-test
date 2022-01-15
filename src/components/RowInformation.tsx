import React from "react";
import { useNavigate } from "react-router-dom";
import { RepositoriesInformation } from "../interfaces/ReposInterface";

interface Props {
  gitHubName: string;
  avatarUrl: string;
  repoInfo: RepositoriesInformation;
}

const RowInformation: React.FC<Props> = ({ gitHubName, avatarUrl, repoInfo }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={avatarUrl}
              alt="Avatar Url"
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{repoInfo.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{repoInfo.fullName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {repoInfo.createdAt.split("T")[0]}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href={repoInfo.repoUrl}>
          <p className="text-gray-900 whitespace-no-wrap hover:text-indigo-500 hover:underline">
            {repoInfo.repoUrl}
          </p>
        </a>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span
            onClick={() =>
              navigate(`/${gitHubName}/repos/${repoInfo.name}/commits`)
            }
            className="relative hover:underline hover:cursor-context-menu"
          >
            View {repoInfo.totalCommits} commit(s)
          </span>
        </span>
      </td>
    </tr>
  );
};

export default RowInformation;
