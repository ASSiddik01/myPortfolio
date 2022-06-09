import React from "react";
const expriences = [
  {
    _id: 1,
    institute: "ITFLE Ltd.",
    year: "2021 - 2022",
    designation: "Shopify Theme Developer.",
  },
  {
    _id: 2,
    institute: "Softlab Ltd.",
    year: "2022 - Running",
    designation: "Front-end Web developer",
  },
];

const Exprience = () => {
  return (
    <div className="">
      <div className="w-full">
        <div className="md:mx-4">
          <h3 className="text-2xl text-gray-800 font-bold mb-4">
            Job Expriences
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap">
        {expriences.map((exprience) => (
          <div key={exprience._id} className="w-full md:w-1/2">
            <div className=" mb-4 md:mx-4">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-primary font-bold">
                  {exprience.institute}
                </h3>
              </div>
              <div className="divider my-0"></div>
              <ul className="list-disc  md:px-4">
                <li>{exprience.designation}</li>
                <li>{exprience.year}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exprience;
