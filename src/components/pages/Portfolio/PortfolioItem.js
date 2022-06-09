import React from "react";
import { FaRegEye } from "react-icons/fa";

const PortfolioItem = (props) => {
  const { name, type, url, img, description } = props.portfolio;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-48 bg-red-200 rounded-md overflow-hidden">
          <img
            src={img}
            alt="coverimg"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute opacity-0 transition duration-200 bg-red-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-10 text-xl text-red-600 flex items-center justify-center border-2 border-red-600 rounded hover:text-white hover:bg-red-600"
                >
                  <FaRegEye />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold  mb-2 text-primary">{name}</h3>
          <h5 className="text-sm">
            <span className="font-bold">Type:</span> {type}{" "}
          </h5>
        </div>
        <p className="text-natural">{description}</p>
        <div className="flex justify-center">
          <button className="inline-block mt-3 rounded bg-primary text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-secondary">
            Project Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
