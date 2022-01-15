import React from "react";
import { HeaderTable } from "../helpers/headerTable";
import { ReposInfo } from "../interfaces/ReposInterface";
import HeaderTableInformation from "./HeaderTableInformation";
import RowInformation from "./RowInformation";

interface Props {
  reposInfo: ReposInfo;
}

const Table: React.FC<Props> = ({ reposInfo }) => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">
            {reposInfo.gitHubName}
          </h2>
          <span className="text-xs">Repositories Information</span>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {HeaderTable.map((info) => (
                    <HeaderTableInformation title={info.title} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {reposInfo.reposInfo.map((info, index) => (
                  <RowInformation
                    key={index}
                    avatarUrl={reposInfo.avatarUrl}
                    repoInfo={info}
                  />
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
