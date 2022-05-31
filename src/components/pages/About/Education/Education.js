import React from "react";
import EducationRow from "./EducationRow";
const eduInfos = [
  {
    _id: 1,
    name: "PSC",
    institute: "Victoria Jubliee High School, Chuadanga",
    year: "2009",
    grade: "1st Devision",
    group: "General",
  },
  {
    _id: 1,
    name: "SSC",
    institute: "Victoria Jubliee High School, Chuadanga",
    year: "2015",
    grade: "4.17",
    group: "Business Studies",
  },
  {
    _id: 1,
    name: "HSC",
    institute: "Chuadanga Government college, Chuadnaga",
    year: "2017",
    grade: "1st Devision",
    group: "Business Studies",
  },
  {
    _id: 1,
    name: "BBA",
    institute: "Begum Rokeya University, Rangpur.",
    year: "2018-Running",
    grade: "3.23",
    group: "Finance & Banking",
  },
];

const Education = () => {
  return (
    <div>
      <div className="w-full">
        <div className="md:mx-4">
          <h3 className="text-2xl text-gray-800 font-bold mb-4">
            Education Qualification
          </h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="bg-red-200">SL.</th>
              <th className="bg-red-200">Exam Name</th>
              <th className="bg-red-200">Institute</th>
              <th className="bg-red-200">Passing Year</th>
              <th className="bg-red-200">Grade</th>
              <th className="bg-red-200">Group</th>
            </tr>
          </thead>
          <tbody>
            {eduInfos.map((eduInfo, index) => (
              <EducationRow
                eduInfo={eduInfo}
                key={eduInfo.__id}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
