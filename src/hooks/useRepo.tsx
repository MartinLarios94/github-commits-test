import { useEffect, useState } from "react";
import GitHubAPI from "../api/GitHubAPI";
import { CommitsResponse } from "../interfaces/CommitsResponse";
import { ReposInfo, ReposResponse } from "../interfaces/ReposInterface";

interface useRepoProps {
  userName: string;
}

const useRepo = ({ userName }: useRepoProps) => {
  const [repoInfo, setRepoInfo] = useState<ReposInfo>();
  const [isLoading, setIsLoading] = useState(true);

  const getRepoData = async () => {
    const resp = await GitHubAPI.get<ReposResponse[]>(
      `/users/${userName}/repos`
    );
    getNewRepoData(resp.data);
  };

  const getNewRepoData = async (repos: ReposResponse[]) => {
    let info = [];
    for (let index = 0; index < repos.length; index++) {
      const resp = await GitHubAPI.get<CommitsResponse[]>(
        `/repos/${userName}/${repos[index].name}/commits`
      );
      const data  = {
        name: repos[index].name,
        fullName: repos[index].full_name,
        repoUrl: repos[index].html_url,
        createdAt: repos[index].created_at,
        totalCommits: resp.data.length,
      };
      info.push(data);
    }
    setRepoInfo({
      gitHubName: userName,
      avatarUrl: repos[0].owner.avatar_url,
      reposInfo: info
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return {
    repoInfo,
    isLoading,
  };
};

export default useRepo;
