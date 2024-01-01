import React, { Component } from "react";
import ReactLogo from ".././logo.svg";
import Me from "./me.png";
import IELogo from "../ielogo.png";
import DOSlogo from "../msdoslogo.png";
import Mail from "./mail2.png";
import ResumeLogo from "./folder.png"
export class Bg extends Component {
  toogleClick = (x, y) => {
    //console.log(this.props);
    if (!this.props[y]) {
      this.props.openwin1(x);
      this.props.windowset(parseInt(y));
    }
  };

  render() {
    return (
      <div class=" cursor-pointer fixed left-0 text-white text-sm min-h-full w-[200px]">
        <div class=" text-center absolute left-0 mx-2.5 grid grid-flow-row  ">
          <div
            onDoubleClick={(event) => this.toogleClick(3, "3")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 grid grid-flow-row justify-center"
          >
            <img class="object-contain w-[48px]" src={Me} alt="Me"></img>
            <p>Me</p>
          </div>
          <div
            onDoubleClick={(event) => this.toogleClick(2, "2")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 grid grid-flow-row justify-center"
          >
            <img class="object-contain pl-1" src={DOSlogo} alt="Hi"></img>
            <p>MS-DOS</p>
          </div>

          <div
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 grid grid-flow-row justify-center "
            onDoubleClick={(event) => this.toogleClick(1, "1")}
            // onClick={(event) => this.toogleClick(1, "1")}
          >
            <img class="object-contain" src={IELogo} alt="Hi"></img>
            <p>Internet</p>
          </div>

          <div
            onDoubleClick={(event) => this.toogleClick(4, "4")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 grid grid-flow-row justify-center "
          >
            <img
              class="object-contain"
              src={Mail}
              alt="Mail"
              className="h-[50px]"
            ></img>
            <p>Mail</p>
          </div>
          <div
            onDoubleClick={(event) => this.toogleClick(5, "5")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 grid grid-flow-row justify-center "
          >
            <img
              class="object-contain"
              src={ResumeLogo}
              alt="Resume"
              className="h-[50px]"
            ></img>
            <p>Resume</p>
          </div>
        </div>

        <div class=" text-center absolute right-0 mx-2.5 grid grid-flow-row  "></div>
      </div>
    );
  }
}
