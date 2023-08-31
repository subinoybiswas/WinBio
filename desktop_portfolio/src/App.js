import "./App.css";
import { Bg } from "./assets/bg";
import { Window1 } from "./assets/window1";
import { Window2 } from "./assets/Window2";
import { Window3 } from "./assets/window3";
import win from "./winlogo.png";
import React, { useState } from "react";
import bgimg from "./winbg.png";
import { BrowserView, MobileView } from "react-device-detect"; //  isBrowser,isMobile also available

function App() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [z, setz] = useState(1);
  const [z2, setz2] = useState(2);
  const [z3, setz3] = useState(3);
  const [o, seto] = useState(0);
  const [o2, seto2] = useState(0);
  const [o3, seto3] = useState(0);

  //console.log(clicked);

  var functions = {
    1: clicked,
    1.1: setClicked,
    1.2: z,
    1.3: setz,
    1.4: seto,
    2: clicked2,
    2.1: setClicked2,
    2.2: z2,
    2.3: setz2,
    2.4: seto2,
    3: clicked3,
    3.1: setClicked3,
    3.2: z3,
    3.3: setz3,
    3.4: seto3,
  };

  const windowSet = async (x) => {
    // console.log(typeof x);
    for (let i = 1; i <= 3; i++) {
      if (i === x) {
        functions[i + 0.3](10);
        // await console.log(z);
      } else {
        functions[i + 0.3](i);
      }
    }
  };

  const windowClose = async (x) => {
    // console.log(x);
    functions[x + 0.3](0);
    // await console.log(z);
  };

  //console.log("Type of functions: ", typeof functions);
  const handleToggleClick = async (x) => {
    //console.log("hi");
    //console.log(Window2);
    functions[x + 0.1](false);
    windowClose(x);
    functions[x + 0.4](0);
    console.log(z, z2, z3);
  };

  const minimize = (x) => {
    //console.log("hi");
    //console.log(Window2);
    functions[x + 0.1](false);
    windowClose(x);
  };

  const maximize = (x) => {
    functions[x + 0.1](true);
    windowSet(x);
  };

  const openwin1 = (x) => {
    functions[x + 0.1](true);
    functions[x + 0.4](1);
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
    <div>
      <BrowserView>
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
              Minimize={minimize}
              openwin1={openwin1}
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
              Minimize={minimize}
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
              Minimize={minimize}
            />
          ) : (
            ""
          )}

          {isActive ? (
            <div class=" fixed h-[400px] w-[250px] bg-black left-0 bottom-10 z-[100]">
              <div class=" bg-emerald-300 h-[60vh] w-[35px] ">
                <div class="  fixed text-black bg-zinc-50 w-[200px] h-[35px] ml-1 -left-[90px] bottom-[19%] -rotate-90">
                  Windows Me
                </div>
              </div>
              Hi
            </div>
          ) : (
            <></>
          )}
          <div class="cursor-pointer bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px] z-[100] text-black">
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
                    class="ml-1 mt-0.5 h-[20px] w-[20px] "
                  ></img>
                  <div class="text-black">Start</div>
                </div>
              </div>
              <div className="  grid grid-flow-col  h-[28px] items-center">
                {o !== 0 ? (
                  <div
                    class={
                      " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                      (z === 10
                        ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                        : "  border-e-black border-b-black")
                    }
                    onClick={() => maximize(1)}
                  >
                    APP1
                  </div>
                ) : (
                  <></>
                )}
                {o2 !== 0 ? (
                  <div
                    class={
                      " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                      (z2 === 10
                        ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                        : "  border-e-black border-b-black")
                    }
                    onClick={() => maximize(2)}
                  >
                    APP2
                  </div>
                ) : (
                  <></>
                )}
                {o3 !== 0 ? (
                  <div
                    class={
                      " my-[5px] mx-[5px] border-t-2 border-s-2 w-[100px] border-e-[3px] border-b-[3px]" +
                      (z3 === 10
                        ? "border-t-black  border-s-black border-e-white  border-black bg-slate-50"
                        : "  border-e-black border-b-black")
                    }
                    onClick={() => maximize(3)}
                  >
                    APP3
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="Time"></div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div id="page">
          <div id="container">
            <h1>:(</h1>
            <h2>
              Looks like you are using a Mobile Device. This Website isn't yet
              optimised for Mobile Devices. Please visit this page with a
              PC/Mac.
            </h2>

            <div id="details">
              <div id="qr">
                <div
                  id="image"
                  class=" grid w-[80px] h-[80px] content-center items-center"
                >
                  <img src="https://i.ibb.co/QjwGzqY/qr.png" alt="QR Code" />
                </div>
              </div>
              <div id="stopcode">
                <h4>
                  For more information about this project and updates. Please
                  visit:
                  <br />
                  https://github.com/subinoybiswas/WinBio
                </h4>
                <h5>
                  If you call a support person, give them this info:
                  <br />
                  Stop Code: 404 PAGE NOT FOUND
                </h5>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
}

export default App;
