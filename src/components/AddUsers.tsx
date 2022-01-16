import React, { useEffect, useState } from "react";
import { userData } from "../interfaces/UserInterface";

const AddUsers: React.FC = () => {
  const users = localStorage.getItem("users");
  const dataUser: userData[] = users === null ? [] : JSON.parse(users);
  const [value, setValue] = useState<string>("");

  const onSave = () => {
    if (value.length === 0) return;
    dataUser.push({ userName: value });
    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(dataUser));
  };

  useEffect(() => {
    onSave();
  }, []);

  return (
    <div className="flex items-start gap-5 mt-20 justify-center h-screen">
      <form action="/">
        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
          <h1 className="text-center text-lg font-bold text-gray-500">
            Add New User
          </h1>
          <div className="space-y-4 mt-6">
            <div className="w-full">
              <input
                type="text"
                placeholder="GitHub User"
                className="px-4 py-2 bg-gray-50"
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
              />
            </div>
          </div>
          <button
            className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
            onClick={onSave}
          >
            Register
          </button>
        </div>
      </form>
      <div className="table w-full p-2">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">#</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  User Name
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataUser.map((info, i) => (
              <tr
                key={i}
                className="bg-gray-100 text-center border-b text-sm text-gray-600"
              >
                <td className="p-2 border-r">{i + 1}</td>
                <td className="p-2 border-r">{info.userName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddUsers;
