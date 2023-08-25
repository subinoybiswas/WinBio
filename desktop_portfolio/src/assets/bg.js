import React, { Component } from "react";
import Diamond from ".././logo.svg";
export class Bg extends Component {
  toogleClick = () => {
    //console.log("hein");
    if (!this.props.clicked) {
      this.props.openwin1();
    }
  };
  render() {
    return (
      <div class="fixed left-0 text-white min-h-full w-[200px]">
        <div class=" text-center absolute left-0 mx-2.5 grid grid-flow-row  ">
          <div
            onClick={this.toogleClick}
            class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 "
          >
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home</p>
          </div>

          <div class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 ">
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home</p>
          </div>
        </div>

        <div class=" text-center absolute right-0 mx-2.5 grid grid-flow-row  ">
          <div class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 ">
            <img class="object-contain" src={Diamond} alt="Hi"></img>
            <p>Home</p>
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
