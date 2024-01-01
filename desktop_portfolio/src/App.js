import "./App.css";
import { Bg } from "./assets/bg";
import { Window1 } from "./assets/window1";
import { Window2 } from "./assets/Window2";
import { Window3 } from "./assets/window3";
import { Window4 } from "./assets/Window4";
import { Window5 } from "./assets/Window5";
import ReactLogo from "./logo.svg";
import Task from "./taskbaritem";
import FolderLogo from "./assets/me.png";
import IELogo from "./ie.ico";
import DOSlogo from "./msdoslogo.png";
import win from "./winlogo.png";
import Mail from "./assets/mail2.png";
import ResumeLogo from "./folder.png"
import React, { useState, useEffect } from "react";
import bgimg from "./winbg.png";
import { BrowserView, MobileView } from "react-device-detect"; //  isBrowser,isMobile also available
import Clock from "react-live-clock";
import StartMenu from "./assets/startMenu";

function App() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [c, setc] = useState(false);
  const [c2, setc2] = useState(false);
  const [c3, setc3] = useState(false);
  const [c4, setc4] = useState(false);
  const [c5, setc5] = useState(false);
  const [z, setz] = useState(1);
  const [z2, setz2] = useState(2);
  const [z3, setz3] = useState(3);
  const [z4, setz4] = useState(4);
  const [z5, setz5] = useState(5);
  const [o, seto] = useState(0);
  const [o2, seto2] = useState(0);
  const [o3, seto3] = useState(0);
  const [o4, seto4] = useState(0);
  const [o5, seto5] = useState(0);

  //console.log(clicked);
  const [dataArray, setDataArray] = useState([]);

  const taskArray = [
    { id: 1, logo: IELogo, name: "Internet" },
    { id: 2, logo: DOSlogo, name: "MS-DOS" },
    { id: 3, logo: FolderLogo, name: "Me" },
    { id: 4, logo: Mail, name: "Mail" },
    { id: 5, logo: ResumeLogo, name: "Resume" },
  ];

  const addToDataArray = (id) => {
    const task = taskArray.find((item) => item.id === id);

    if (task) {
      // Check if the task is not already in the dataArray
      if (!dataArray.some((item) => item.id === task.id)) {
        setDataArray((prevDataArray) => [...prevDataArray, task]);
      } else {
        console.log(`Task with id ${id} is already in dataArray.`);
      }
    }

    console.log(dataArray);
  };

  const deleteFromDataArray = (id) => {
    setDataArray((prevDataArray) =>
      prevDataArray.filter((item) => item.id !== id)
    );
  };
  useEffect(() => {
    // This block will execute each time dataArray gets updated
    console.log("dataArray updated:", dataArray);
  }, [dataArray]);
  var functions = {
    1: clicked,
    1.1: setClicked,
    1.2: z,
    1.3: setz,
    1.4: seto,
    1.5: c,
    1.6: setc,
    2: clicked2,
    2.1: setClicked2,
    2.2: z2,
    2.3: setz2,
    2.4: seto2,
    2.5: c2,
    2.6: setc2,
    3: clicked3,
    3.1: setClicked3,
    3.2: z3,
    3.3: setz3,
    3.4: seto3,
    3.5: c3,
    3.6: setc3,
    4: clicked4,
    4.1: setClicked4,
    4.2: z4,
    4.3: setz4,
    4.4: seto4,
    4.5: c4,
    4.6: setc4,
    5: clicked5,
    5.1: setClicked5,
    5.2: z5,
    5.3: setz5,
    5.4: seto5,
    5.5: c5,
    5.6: setc5,
  };

  const windowSet = (x) => {
    // console.log(typeof x);
    for (let i = 1; i <= 5; i++) {
      if (i === x) {
        functions[i + 0.3](10);

        // await console.log(z);
        functions[i + 0.6](true);
      } else {
        functions[i + 0.3](i);
        functions[i + 0.6](false);
      }
    }
  };

  const windowClose = (x) => {
    // console.log(x);
    functions[x + 0.3](0);
    functions[x + 0.6](false);

    // await console.log(z);
  };

  //console.log("Type of functions: ", typeof functions);
  const handleToggleClick = (x) => {
    //console.log("hi");
    //console.log(Window2);
    functions[x + 0.1](false);
    windowClose(x);
    functions[x + 0.4](0);
    deleteFromDataArray(x);
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
    addToDataArray(x);
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
          {functions[4] ? (
            <Window4
              {...functions}
              handleToggleClick={handleToggleClick}
              windowset={windowSet}
              windowclose={windowClose}
              Minimize={minimize}
            />
          ) : (
            ""
          )}
          {functions[5] ? (
            <Window5
              {...functions}
              handleToggleClick={handleToggleClick}
              windowset={windowSet}
              windowclose={windowClose}
              Minimize={minimize}
            />
          ) : (
            ""
          )}

          {isActive ? <StartMenu /> : <></>}
          <div class="cursor-pointer bg-[#C0C0C0] fixed border-t-2 border-white bottom-0 left-0 right-0 h-10 text-[17px] z-[100] text-black">
            <div class="grid grid-flow-col justify-start ">
              <div class="mx-1 h-[28px] w-[90px] ">
                <div
                  onClick={handleClick}
                  class={
                    "border-t-2 border-s-2 bg-[#C0C0C0] my-[5px] mx-1  grid grid-flow-col content-center border-e-[3px] border-b-[3px]" +
                    (isActive
                      ? "   border-t-black border-s-black  "
                      : "  border-white   border-e-black border-b-black")
                  }
                >
                  <img
                    src={win}
                    alt="Win"
                    class="ml-1 mt-0.5 h-[20px] w-[20px] "
                  ></img>
                  <div class="text-black ">
                    <strong>Start</strong>
                  </div>
                </div>
              </div>
              <div className="  grid grid-flow-col  h-[28px] items-center">
                {dataArray.map((item) => (
                  // Conditionally render based on the value of the 'on' prop
                  <Task
                    key={item.id}
                    functions={functions}
                    Logo={item.logo}
                    no={item.id}
                    maximize={maximize}
                    name={item.name}
                  />
                ))}
              </div>
              <div className=" px-2 bg-white Time fixed right-2 border-t-2 border-s-2 my-[5px] mx-1  content-center border-e-[3px] border-b-[3px]">
                <Clock
                  format={"HH:mm"}
                  ticking={true}
                  timezone={"Asia/Kolkata"}
                />
              </div>
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
