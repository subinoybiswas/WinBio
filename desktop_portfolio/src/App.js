import "./App.css";
import { Bg } from "./assets/bg";
import { Window1 } from "./assets/window1";
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
  const bgclick = () => {
    if (isActive) {
      setIsActive(false);
    }
  };
  return (
    <div
      className="BG"
      class=" bg-[#018281] min-h-screen max-h-[95vh] max-w-[100vw] overflow-hidden"
    >
      <Bg />
      <Window1 />
      <div
        onClick={bgclick}
        class="bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px]"
      >
        <div>
          <div
            onClick={handleClick}
            class={
              "border-t-2 border-s-2 bg-[#C0C0C0] my-[5px] mx-1.5 left-0 grid grid-flow-col content-center" +
              (isActive
                ? "  h-[28px] w-[70px] border-black  "
                : " h-[28px] w-[70px] border-white shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,1)] ")
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
