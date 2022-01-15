import { useEffect, useState } from "react";
import GitHubAPI from "../api/GitHubAPI";
import { CommitsResponse } from "../interfaces/CommitsResponse";
import { ReposResponse } from "../interfaces/ReposInterface";

interface useRepoProps {
  userName: string;
}

interface useRepoState {
  name: string;
  fullName: string;
  repoUrl: string;
  totalCommits: number;
}

const useRepo = ({ userName }: useRepoProps) => {
  const [repos, setRepos] = useState<ReposResponse[]>([]);
  const [repoInfo, setRepoInfo] = useState<useRepoState[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRepoData = async () => {
    const resp = await GitHubAPI.get<ReposResponse[]>(`/users/${userName}/repos`);
    setRepos(resp.data);
    getNewRepoData(resp.data);
  };

  const getNewRepoData = async (repos: ReposResponse[]) => {
    let info: useRepoState[] = []
    for (let index = 0; index < repos.length; index++) {
      const resp = await GitHubAPI.get<CommitsResponse[]>(
        `/repos/${userName}/${repos[index].name}/commits`
      );
      const data: useRepoState = {
        name: repos[index].name,
        fullName: repos[index].full_name,
        repoUrl: repos[index].html_url,
        totalCommits: resp.data.length,
      }
      info.push(data)
    }
    setRepoInfo(info);
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
