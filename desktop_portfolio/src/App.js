import "./App.css";
import { Bg } from "./assets/bg";
import { Window1 } from "./assets/window1";
import { Window2 } from "./assets/Window2";
import { Window3 } from "./assets/window3";
import win from "./winlogo.png";
import React, { useState } from "react";
import bgimg from "./winbg.png";

function App() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [activeWin, setactivewin] = useState(null);
  //console.log(clicked);
  var functions = {
    1: clicked,
    1.1: setClicked,
    2: clicked2,
    2.1: setClicked2,
    3: clicked3,
    3.1: setClicked3,
    active: activeWin,
    setactive: setactivewin,
  };
  //console.log("Type of functions: ", typeof functions);
  const handleToggleClick = (x) => {
    //console.log("hi");
    functions[x](false);
  };
  const openwin1 = (x) => {
    functions[x](true);
  };
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
      onClick={bgclick}
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      class={
        " bg-[#018281] min-h-[100vh] max-h-screen  min-w-[100vw] max-w-[100vw]" +
        {}
      }
    >
      <Bg {...functions} openwin1={openwin1} />
      {functions[2] ? (
        <Window2 {...functions} handleToggleClick={handleToggleClick} />
      ) : (
        ""
      )}
      {functions[3] ? (
        <Window3 {...functions} handleToggleClick={handleToggleClick} />
      ) : (
        ""
      )}
      {functions[1] ? (
        <Window1 {...functions} handleToggleClick={handleToggleClick} />
      ) : (
        ""
      )}

      <div class="bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px]">
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
