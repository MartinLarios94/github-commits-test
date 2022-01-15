import React from "react";
import { UserResponse } from "../interfaces/UserInterface";

interface Props {
  userInfo: UserResponse;
}

const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 hover:transform hover:scale-95">
      <img
        className="w-full h-60 object-cover"
        src={userInfo.avatar_url}
        alt="User Profile"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{userInfo.name}</div>
        <div className="flex flex-row gap-7">
          <h1 className="text-base font-bold">GitHub Name: </h1>
          <h2>{userInfo.login}</h2>
        </div>
        <div className="flex flex-row gap-16">
          <h1 className="text-base font-bold">Location: </h1>
          <h2>{userInfo.location}</h2>
        </div>
        <div className="flex flex-row gap-20">
          <h1 className="text-base font-bold">Repos: </h1>
          <h2>{userInfo.public_repos}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
