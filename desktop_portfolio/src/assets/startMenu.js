import React from "react";
const StartMenu = () => {
  const items = ["Hi", "Hello","Hi", "Hello","Hi", "Hello"];
  return (
    <div class=" absolute h-[30rem] w-[20rem] bg-white left-0 bottom-10 z-[100]">
      <div class="grid grid-flow-col ">
        <div class=" bg-emerald-300">
          {/* <div class="  fixed text-black bg-zinc-50 w-[200px] h-[35px] ml-1 -left-[90px] bottom-[19%] -rotate-90">
    Windows Me
  </div> */}
        </div>
        <div class="bg-black col-span-5 grid grid-flow-row auto-rows-max">
          {/* <div class="bg-blue-400 row-[span_16_/_span_16]">Hi</div> */}
          {items.map((item) => (
            // Conditionally render based on the value of the 'on' prop
            <div class="bg-blue-400 h-12 border-2 text-center py-1 border-slate-50">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StartMenu;
