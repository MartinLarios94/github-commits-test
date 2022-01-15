import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Loading from "../components/Loading";
import TableCommit from "../components/TableCommit";
import useCommits from "../hooks/useCommits";

const Commits = () => {
  const { username, reponame } = useParams();
  const { commitInfo, isLoading } = useCommits({
    userName: username!,
    repoName: reponame!,
  });

  if (isLoading) return <Loading />;

  return (
    <Container>
      <TableCommit
        repoName={reponame!}
        userName={username!}
        commitInfo={commitInfo}
      />
    </Container>
  );
};

export default Commits;
