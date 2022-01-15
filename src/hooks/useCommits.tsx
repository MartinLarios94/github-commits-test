import { useEffect, useState } from "react";
import GitHubAPI from "../api/GitHubAPI";
import { CommitResp, CommitsResponse } from "../interfaces/CommitsResponse";

interface useCommitsProps {
  userName: string;
  repoName: string;
}

const useCommits = ({ userName, repoName }: useCommitsProps) => {
  const [commitInfo, setCommitInfo] = useState<CommitResp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCommitsData = async () => {
    const resp = await GitHubAPI.get<CommitsResponse[]>(
      `/repos/${userName}/${repoName}/commits`
    );
    getCommitInfo(resp.data);
  };

  const getCommitInfo = (commits: CommitsResponse[]) => {
    const info: CommitResp[] = commits.map((info) => {
      return {
        committerName: info.commit.committer.name,
        commitDate: info.commit.committer.date,
        committerAvatarUrl: info.committer.avatar_url,
        commitMessage: info.commit.message,
      };
    });
    setCommitInfo(info);
    setIsLoading(false);
  };

  useEffect(() => {
    getCommitsData();
  }, []);

  return {
    commitInfo,
    isLoading,
  };
};

export default useCommits;
