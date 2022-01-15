import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useRepo from "../hooks/useRepo";

const Repositories = () => {
  const { username } = useParams();
  const { repoInfo, isLoading } = useRepo({ userName: username! });

  if (isLoading) {
    return <Loading />;
  }
  return <div>{JSON.stringify(repoInfo, null, 5)}</div>;
};

export default Repositories;
