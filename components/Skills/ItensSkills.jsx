import React from "react";

const ItensSkills = (props) => {
  return (
    <div className="fira-code font-skills flex flex-col gap-3 items-center text-[#fff] uppercase">
      <img 
        src={props.icon} 
        alt={`${props.text} logo`} 
        className="w-10 md:w-15 hover:scale-110 transition-all duration-700"
      />
      <p>{props.text}</p>
    </div>
  );
};

export default ItensSkills;
