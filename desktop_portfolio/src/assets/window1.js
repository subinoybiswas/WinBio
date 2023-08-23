import React, { Component } from "react";
import { Rnd } from "react-rnd";
export class Window1 extends Component {
  state = {
    isFullScreen: false,
    originalPosition: { x: 100, y: 100 }, // Set your initial position here
    originalSize: { width: 400, height: 300 },
  };

  toggleFullScreen = () => {
    this.setState(
      (prevState) => ({
        isFullScreen: !prevState.isFullScreen,
      }),
      () => {
        if (this.state.isFullScreen) {
          // Entering full screen
          const x = this.rnd.state.top;
          const y = this.rnd.state.left;
          const { width, height } = this.rnd.state.bounds;

          this.setState({
            originalPosition: { x, y },
            originalSize: { width, height },
          });

          this.rnd.updatePosition({ x: 0, y: 0 }); // Move to top-left corner
          this.rnd.updateSize({
            width: 500,
            height: 600,
          }); // Resize to full screen
        } else {
          // Exiting full screen
          console.log(this.rnd);
          this.rnd.updatePosition({ x: 150, y: 205 });
          this.rnd.updateSize({ width: 300, height: 190 });
        }
      }
    );
  };
  render() {
    const Box = () => (
      <div class="mx-0 my-0 h-[100%] bg-white">
        <div class="bg-black grid grid-flow-col justify-between w-[100%] ">
          <div onClick={this.toggleFullScreen} class="text-white px-2">
            Resume
          </div>
          <div onClick={this.toggleFullScreen} class="text-white px-2">
            X
          </div>
        </div>
        <div className="body" class="bg-slate-100">
          hi
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
          ref={(c) => {
            this.rnd = c;
          }}
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
