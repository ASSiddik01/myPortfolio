import React from "react";

const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-natural font-light">{title}</h5>
          <span className="text-md text-primary font-bold">{percentage}</span>
        </div>
        <div className="w-full bg-red-200 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-primary rounded"
            style={{ width: `${percentage}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
