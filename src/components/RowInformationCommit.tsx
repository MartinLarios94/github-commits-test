import React from "react";
import { REPO_ID } from "../helpers/currentRepoId";
import { CommitResp } from "../interfaces/CommitsResponse";

interface Props {
  commitInfo: CommitResp;
}

const RowInformationCommit: React.FC<Props> = ({ commitInfo }) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-5 h-5">
            <img
              className="w-full h-full rounded-full"
              src={commitInfo.committerAvatarUrl}
              alt="Avatar Url"
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {commitInfo.committerName}
            </p>
          </div>
        </div>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {commitInfo.commitDate.split("T")[0]}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {commitInfo.commitMessage}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 hover:text-indigo-500 hover:underline">
        <a href={commitInfo.commitUrl}>{commitInfo.commitUrl}</a>
      </td>
    </tr>
  );
};

export default RowInformationCommit;
