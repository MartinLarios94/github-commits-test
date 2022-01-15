import React from "react";

interface Props {
  title: string;
}

const HeaderTableInformation: React.FC<Props> = ({ title }) => {
  return (
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {title}
    </th>
  );
};

export default HeaderTableInformation;
