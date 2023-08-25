import React, { Component } from "react";
import { Rnd } from "react-rnd";
export class Window1 extends Component {
  state = {
    isFullScreen: false,
    originalPosition: { x: 100, y: 100 }, // Set your initial position here
    originalSize: { width: 400, height: 300 },
  };
  toogleClick = () => {
    if (this.props.clicked) {
      this.props.handleToggleClick("1.1");
    }
  };
  toggleFullScreen = () => {
    //console.log(this.props);
    this.setState(
      (prevState) => ({
        isFullScreen: !prevState.isFullScreen,
      }),
      () => {
        const { x, y } = this.rnd.draggable.state;
        const { width, height } = this.rnd.resizable.state;

        //console.log(x, y);
        if (this.state.isFullScreen) {
          this.setState({
            originalPosition: { x, y },
            originalSize: { width, height },
          });
          // Entering full screen

          this.rnd.updatePosition({ x: 0, y: 0 }); // Move to top-left corner
          this.rnd.updateSize({
            width: window.innerWidth,
            height: window.innerHeight - 40,
          }); // Resize to full screen
        } else {
          // Exiting full screen
          //console.log(this.rnd);

          this.rnd.updatePosition({
            x: this.state.originalPosition.x,
            y: this.state.originalPosition.y,
          });
          this.rnd.updateSize({
            width: this.state.originalSize.width,
            height: this.state.originalSize.height,
          });
        }
      }
    );
  };

  render() {
    const Box = () => (
      <div class="mx-0 my-0 h-[100%] bg-white">
        <div class="bg-black grid grid-flow-col justify-between w-[100%] ">
          <div class="text-white px-2">Resume</div>
          <div class=" grid grid-flow-col justify-end">
            <div onClick={this.toggleFullScreen} class="text-white px-2">
              B
            </div>
            <div onClick={this.toogleClick} class="text-white px-2">
              X
            </div>
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
