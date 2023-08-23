import React, { Component } from "react";
import { Rnd } from "react-rnd";
export class Window1 extends Component {
  render() {
    
    const Box = () => (
      <div class="mx-0 my-0 h-[100%] bg-white">
        <div class="bg-black grid grid-flow-col justify-between w-[100%] ">
          <div class="text-white px-2">Resume</div>
          <div class="text-white px-2">X</div>
        </div>
      </div>
    );
    return (
      <div
        style={{
          width: "800px",
          height: "400px",
        }}
      >
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: 300,
            height: 190,
          }}
          minWidth={200}
          minHeight={190}
          bounds="window"
        >
          <Box />
        </Rnd>
      </div>
    );
  }
}
