import React, { Component } from "react";
import { Rnd } from "react-rnd";
import Iframe from "react-iframe-click";
export class Window1 extends Component {
  state = {
    isFullScreen: false,
    originalPosition: { x: 100, y: 100 }, // Set your initial position here
    originalSize: { width: 400, height: 300 },
  };

  divclick = (x) => {
    this.props.windowset(x);
    // await this.setState({ z: this.props.active });
    //console.log(this.props[1.2], this.props[2.2], this.props[3.2]);
  };

  toogleClick = () => {
    if (this.props[1]) {
      // await this.props.windowclose(1);
      this.props.handleToggleClick(1);
    }
  };
  handleButtonClick = (event) => {
    event.stopPropagation();
    this.props.Minimize(1);
  };

  minimizewin = (x) => {
    this.props.Minimize(x);
  };
  toggleFullScreen = () => {
    //console.log(this.props);
    this.props.windowset(1);
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
      <div class=" cursor-pointer mx-0 my-0 h-[94%] drop-shadow-lg bg-white">
        <div
          class="grid grid-flow-col bg-[#000080] py-1 px-1  border-[2px] border-slate-100 "
          onClick={() => {
            this.divclick(1);
          }}
        >
          <div class="grid grid-flow-col">
            <div class="text-white text-xl/[22px] pl-1 self-start  mr-0.5 ">
              <strong>Internet</strong>
            </div>
          </div>

          <div class=" grid grid-flow-col justify-end mr-0.5 self-center h-[20px]">
            <div
              onClick={this.handleButtonClick}
              class="px-2  ml-0.5  bg-center bg-[#ccc] bg-no-repeat bg-[url('minimizeicon.png')]"
              style={{
                borderLeftColor: "#fff",
                borderTopColor: "#fff",
                border: "2px solid #7c7c7c",
              }}
            ></div>

            <div
              onClick={this.toggleFullScreen}
              class="px-2 ml-0.5   bg-center bg-[#ccc] bg-no-repeat bg-[url('maximizeicon.png')]"
              style={{
                borderLeftColor: "#fff",
                borderTopColor: "#fff",
                border: "2px solid #7c7c7c",
              }}
            ></div>

            <div
              onClick={this.toogleClick}
              class="px-2  ml-0.5   bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
              style={{
                borderLeftColor: "#fff",
                borderTopColor: "#fff",
                border: "2px solid #7c7c7c",
              }}
            ></div>
          </div>
        </div>
        <div
          onClick={() => {
            this.divclick(1);
          }}
          className="body"
          class="bg-slate-100 h-[100%]"
        >
          <Iframe
            class="w-[100%] h-[100%]"
            src="https://oldgoogle.neocities.org/1998/"
            onInferredClick={() => {
              this.divclick(1);
            }}
          ></Iframe>
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
          y: 100,
          width: 600,
          height: 500,
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
