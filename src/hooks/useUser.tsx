import { useEffect, useState } from "react";
import GitHubAPI from "../api/GitHubAPI";
import { UserResponse } from "../interfaces/UserInterface";

interface userProps {
  userName: string;
}

const useUser = () => {
  const [usersInfo, setUsersInfo] = useState<UserResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const USERS = [{ userName: "MartinLarios94" }];
  let users = localStorage.getItem("users");
  let infoUsers: UserResponse[] = [];

  if (!users) {
    localStorage.setItem("users", JSON.stringify(USERS));
    users = localStorage.getItem("users");
  }

  const dataUsers: userProps[] = JSON.parse(users!);

  const getUserData = async () => {
    try {
      for (let index = 0; index < dataUsers.length; index++) {
        const resp = await GitHubAPI.get<UserResponse>(
          `/users/${dataUsers[index].userName}`
        );
        if (resp.status === 200) infoUsers.push(resp.data);
      }
      setUsersInfo(infoUsers);
      setIsLoading(false);
    } catch (error) {
      handleError();
    }
  };

  const handleError = () => {
    setIsLoading(false);
    dataUsers.pop();
    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(dataUsers));
    getUserData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  return {
    usersInfo,
    isLoading,
  };
};

export default useUser;
