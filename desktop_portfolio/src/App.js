import "./App.css";
import { Bg } from "./assets/bg";
import win from "./winlogo.png";
import React, { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <div class="flex bg-[#018281] min-h-screen">
      <Bg />
      <div class="bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px]">
        <div onClick={handleClick}>
          <div
            class={
              "border-t-2 border-s-2 bg-[#C0C0C0] my-[5px] mx-1.5 left-0 grid grid-flow-col content-center" +
              (isActive
                ? " h-[28px] w-[70px] border-white shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,1)]  "
                : " h-[28px] w-[70px] border-black  ")
            }
          >
            <img
              src={win}
              alt="Win"
              class="ml-1 mt-0.5 h-[20px] w-[20px]"
            ></img>
            <div class="">Start</div>
          </div>
        </div>

        <div className="Time"></div>
      </div>
    </div>
  );
}

export default App;
