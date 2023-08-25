import React, { Component } from "react";
import Diamond from ".././logo.svg";
export class Bg extends Component {
  toogleClick = (x, y) => {
    //console.log(this.props);
    if (!this.props[y]) {
      this.props.openwin1(x);
    }
  };
  render() {
    return (
      <div class="fixed left-0 text-white min-h-full w-[200px]">
        <div class=" text-center absolute left-0 mx-2.5 grid grid-flow-row  ">
          <div
            onDoubleClick={(event) => this.toogleClick("1.1", "1")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 "
          >
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home</p>
          </div>

          <div
            onDoubleClick={(event) => this.toogleClick("2.1", "2")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 "
          >
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home1</p>
          </div>
        </div>

        <div class=" text-center absolute right-0 mx-2.5 grid grid-flow-row  ">
          <div
            onDoubleClick={(event) => this.toogleClick("3.1", "3")}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 "
          >
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home3</p>
          </div>

          <div class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5  ">
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home</p>
          </div>
        </div>
      </div>
    );
  }
}
