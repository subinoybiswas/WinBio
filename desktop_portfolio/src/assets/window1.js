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
      <div class=" cursor-pointer mx-0 my-0 h-[90%] drop-shadow-lg bg-white">
        <div
          class="grid grid-flow-col bg-[#0000ad] py-1 px-1  border-[2px] border-slate-100 "
          onClick={() => {
            this.divclick(1);
          }}
        >
          <div class="h-[100%]">
            <div class="text-white px-1 text-l float-left">
              <div>
                <strong>Internet</strong>
              </div>
            </div>
          </div>

          <div className="">
            <div class=" grid grid-flow-col justify-end mr-0.5">
              <div
                onClick={(event) => this.minimizewin(1)}
                class=" cursor-pointer text-white "
              >
                <div
                  class="px-2 h-[20px] w-[20px] ml-0.5 float-right  bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
                  style={{
                    borderLeftColor: "#fff",
                    borderTopColor: "#fff",
                    border: "2px solid #7c7c7c",
                  }}
                ></div>
              </div>
              <div onClick={this.toggleFullScreen} class="text-white ">
                <div
                  class="px-2 h-[20px] w-[20px] ml-0.5 float-right  bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
                  style={{
                    borderLeftColor: "#fff",
                    borderTopColor: "#fff",
                    border: "2px solid #7c7c7c",
                  }}
                ></div>
              </div>
              <div onClick={this.toogleClick} class="text-white ">
                <div
                  class="px-2 h-[20px] w-[20px] ml-0.5 float-right  bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
                  style={{
                    borderLeftColor: "#fff",
                    borderTopColor: "#fff",
                    border: "2px solid #7c7c7c",
                  }}
                ></div>
              </div>
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
