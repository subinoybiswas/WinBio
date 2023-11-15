import React from "react";

const Task = ({ functions, Logo,no }) => {
  const maximize = (value) => {
    // Implement your maximize function logic here
    console.log(`Maximizing with value: ${value}`);
  };

  return (
    <div
      className={
        "my-[5px] mx-[5px] border-t-2 border-s-2 min-w-[100px] border-e-[3px] border-b-[3px]" +
        (functions[2.5]
          ? " border-t-black border-s-black border-e-white border-black bg-slate-50"
          : " border-e-black border-b-black")
      }
      onClick={() => maximize(no)}
    >
      <div className="static ml-[5px]">
        <img
          className="h-[17.5px] w-[17.5px] inline-block"
          src={Logo} // Make sure DOSlogo is imported or defined
          alt="Hi"
        ></img>
        <div className="inline-block ml-[5px] text-[18px]/[20px] ">
          <strong>MS-DOS</strong>
        </div>
      </div>
    </div>
  );
};

export default Task;
