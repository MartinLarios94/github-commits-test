import React from "react";
import Container from "../components/Container";
import Loading from "../components/Loading";
import UserInfo from "../components/UserInfo";
import useUser from "../hooks/useUser";

const Home = () => {
  const { isLoading, usersInfo } = useUser();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="mx-40 mt-10 grid grid-cols-3">
        {
          usersInfo.map(info => <UserInfo userInfo={info} />)
        }
      </div>
    </Container>
  );
};

export default Home;
