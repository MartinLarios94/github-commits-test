import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderTable } from "../helpers/headerTable";
import { ReposInfo } from "../interfaces/ReposInterface";
import HeaderTableInformation from "./HeaderTableInformation";
import RowInformation from "./RowInformation";

interface Props {
  reposInfo: ReposInfo;
}

const Table: React.FC<Props> = ({ reposInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">
            {reposInfo.gitHubName}
          </h2>
          <span className="text-xs">Repositories Information</span>
        </div>
        <div className="flex flex-col">
          <div className="self-end mb-2">
            <button
              className="bg-blue-400 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
          <div className="flex flex-row items-center gap-2 border-2 border-cyan-200 p-2">
            <div className="w-10 h-10 bg-red-100 border-white border-2" />
            <span className="text-xs font-semibold">Current Repository</span>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {HeaderTable.map((info, index) => (
                    <HeaderTableInformation key={index} title={info.title} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {reposInfo.reposInfo.map((info, index) => (
                  <RowInformation
                    key={index}
                    gitHubName={reposInfo.gitHubName}
                    avatarUrl={reposInfo.avatarUrl}
                    repoInfo={info}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
