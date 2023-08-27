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
  const [z, setz] = useState(0);
  const [z2, setz2] = useState(0);
  const [z3, setz3] = useState(0);
  //console.log(clicked);

  var functions = {
    1: clicked,
    1.1: setClicked,
    1.2: z,
    1.3: setz,
    2: clicked2,
    2.1: setClicked2,
    2.2: z2,
    2.3: setz2,
    3: clicked3,
    3.1: setClicked3,
    3.2: z3,
    3.3: setz3,
  };

  const windowSet = async (x) => {
    // console.log(typeof x);
    for (let i = 1; i <= 3; i++) {
      if (i === x) {
        await functions[i + 0.3](10);
        // await console.log(z);
      } else {
        await functions[i + 0.3](0);
      }
    }
  };

  const windowClose = async (x) => {
    console.log(x);
    for (let i = 1; i <= 3; i++) {
      if (i === x) {
        await functions[i + 0.3](0);
        // await console.log(z);
      }
    }
  };

  //console.log("Type of functions: ", typeof functions);
  const handleToggleClick = async (x) => {
    //console.log("hi");
    //console.log(Window2);
    functions[x + 0.1](false);
    await windowClose(x);
    await console.log(z, z2, z3);
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
      <Bg {...functions} openwin1={openwin1} windowset={windowSet} />
      {functions[2] ? (
        <Window2
          {...functions}
          handleToggleClick={handleToggleClick}
          windowset={windowSet}
          windowclose={windowClose}
        />
      ) : (
        ""
      )}
      {functions[3] ? (
        <Window3
          {...functions}
          handleToggleClick={handleToggleClick}
          windowset={windowSet}
          windowclose={windowClose}
        />
      ) : (
        ""
      )}
      {functions[1] ? (
        <Window1
          {...functions}
          handleToggleClick={handleToggleClick}
          windowset={windowSet}
          windowclose={windowClose}
        />
      ) : (
        ""
      )}
      <div class="bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px]">
        <div class="grid grid-flow-col justify-start ">
          <div class="mx-1 h-[28px] w-[90px] ">
            <div
              onClick={handleClick}
              class={
                "border-t-2 border-s-2 bg-[#C0C0C0] my-[5px] mx-1  grid grid-flow-col content-center border-e-[3px] border-b-[3px]" +
                (isActive
                  ? "   border-t-black border-s-black   "
                  : "  border-white   border-e-black border-b-black")
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
          <div className="  grid grid-flow-col  h-[28px] items-center">
            <div
              class={
                " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                (z === 10
                  ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                  : "  border-e-black border-b-black")
              }
            >
              APP1
            </div>
            <div
              class={
                " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                (z2 === 10
                  ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                  : "  border-e-black border-b-black")
              }
            >
              APP2
            </div>
            <div
              class={
                " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                (z3 === 10
                  ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                  : "  border-e-black border-b-black")
              }
            >
              APP3
            </div>
          </div>
          <div className="Time"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
