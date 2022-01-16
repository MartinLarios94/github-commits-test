import React from "react";
import { useNavigate } from "react-router-dom";
import { headersTitle } from "../helpers/headerTableCommit";
import { CommitResp } from "../interfaces/CommitsResponse";
import HeaderTableCommit from "./HeaderTableCommit";
import RowInformationCommit from "./RowInformationCommit";

interface Props {
  repoName: string;
  userName: string;
  commitInfo: CommitResp[];
}

const TableCommit: React.FC<Props> = ({ repoName, userName, commitInfo }) => {
  const navigate = useNavigate();
  return (
    <section className="py-1">
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blue-300">
                  {repoName}
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-blue-400 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => navigate(`/${userName}/repos`)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>

          <div className="block overflow-x-auto">
            <table className="items-end bg-transparent border-collapse ">
              <thead>
                <tr>
                  {headersTitle.map((info, index) => (
                    <HeaderTableCommit key={index} title={info.title} />
                  ))}
                </tr>
              </thead>

              <tbody>
                {commitInfo.map((info, index) => (
                  <RowInformationCommit key={index} commitInfo={info} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableCommit;
