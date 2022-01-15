import React from "react";

interface Props {
  title: string;
}

const HeaderTableCommit: React.FC<Props> = ({ title }) => {
  return (
    <th className="px-6 w-full align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      {title}
    </th>
  );
};

export default HeaderTableCommit;
