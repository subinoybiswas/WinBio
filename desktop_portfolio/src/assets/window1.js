import React, { Component } from "react";
import { Rnd } from "react-rnd";
export class Window1 extends Component {
  state = {
    isFullScreen: false,
    originalPosition: { x: 100, y: 100 }, // Set your initial position here
    originalSize: { width: 400, height: 300 },
  };

  divclick = async (x) => {
    this.props.windowset(x);
    // await this.setState({ z: this.props.active });
    //console.log(this.props[1.2], this.props[2.2], this.props[3.2]);
  };

  toogleClick = async () => {
    if (this.props[1]) {
      // await this.props.windowclose(1);
      this.props.handleToggleClick(1);
    }
  };

  minimizewin = (x) => {
    this.props.Minimize(x);
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
            height: window.innerHeight - 30,
          }); // Resize to full screen
        } else {
          // Exiting full screen
          console.log(this.rnd);

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
      <div class=" cursor-pointer mx-0 my-0 h-[95%] drop-shadow-lg bg-white">
        <div class="bg-black grid grid-flow-col justify-between w-[100%] ">
          <div
            class="text-white px-2"
            onClick={() => {
              this.divclick(1);
            }}
          >
            Resume
          </div>
          <div class=" cursor-pointer grid grid-flow-col justify-end">
            <div
              onClick={(event) => this.minimizewin(1)}
              class=" cursor-pointer text-white px-2"
            >
              --
            </div>
            <div onClick={this.toggleFullScreen} class="text-white px-2">
              B
            </div>
            <div
              onClick={this.toogleClick}
              class=" cursor-pointer text-white px-2"
            >
              X
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            this.divclick(1);
          }}
          className="body"
          class="bg-slate-100 h-[100%]"
        >
          hi
        </div>
      </div>
    );

    return (
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
        minWidth={211}
        minHeight={191}
        bounds="window"
        style={{ zIndex: this.props[1.2] }}
        // onDrag={this.divclick(1)}
      >
        <Box />
      </Rnd>
    );
  }
}
