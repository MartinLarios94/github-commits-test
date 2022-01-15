import React from "react";
import Container from "../components/Container";
import Loading from "../components/Loading";
import UserInfo from "../components/UserInfo";
import useUser from "../hooks/useUser";

const Home = () => {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mx-60 mt-10 grid grid-cols-1">
      <Container>
        <UserInfo userInfo={user!} />
      </Container>
    </div>
  );
};

export default Home;
