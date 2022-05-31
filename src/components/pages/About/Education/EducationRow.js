import React from "react";

const EducationRow = ({ eduInfo, index }) => {
  const { name, institute, year, grade, group } = eduInfo;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{institute}</td>
      <td>{year}</td>
      <td>{grade}</td>
      <td>{group}</td>
    </tr>
  );
};

export default EducationRow;
