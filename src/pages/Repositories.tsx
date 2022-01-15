import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Loading from "../components/Loading";
import Table from "../components/Table";
import useRepo from "../hooks/useRepo";

const Repositories = () => {
  const { username } = useParams();
  const { repoInfo, isLoading } = useRepo({ userName: username! });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <Table reposInfo={repoInfo!} />
    </Container>
  );
};

export default Repositories;
