import React, { useEffect, useState } from "react";
import GitHubAPI from "../api/GitHubAPI";
import { UserResponse } from "../interfaces/UserInterface";

const useUser = () => {
  const [user, setUser] = useState<UserResponse>();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    const resp = await GitHubAPI.get<UserResponse>("/MartinLarios94");
    setUser(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return {
    user,
    isLoading,
  };
};

export default useUser;
