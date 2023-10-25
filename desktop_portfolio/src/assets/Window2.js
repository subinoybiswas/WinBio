import React, { Component } from "react";
import { ReactTerminal } from "react-terminal";
import { Rnd } from "react-rnd";

export class Window2 extends Component {
  state = {
    isFullScreen: false,
    originalPosition: { x: 100, y: 100 }, // Set your initial position here
    originalSize: { width: 400, height: 300 },
    directory: "C:\\",
  };
  open = (x, y) => {
    //console.log(this.props);
    if (!this.props[y]) {
      this.props.openwin1(x);
      this.props.windowset(parseInt(y));
    }
  };
  commands = {
    whoami: "Subinoy",
    cd: (dir) => {
      if (dir !== "" && dir !== " " && dir !== undefined && dir !== null) {
        this.setState({
          directory: this.state.directory + dir + "\\",
        });
      }
    },
    "cd..": () => {
      this.setState({
        directory: "C:\\",
      });
    },
    "Internet.exe": () => {
      this.open(1, "1");
      return "Process Internet.exe has started";
    },
    "Resume.pdf": () => {
      this.open(3, "3");
      return "Opened Resume.pdf";
    },
    exit: () => {
      this.toogleClick();
    },
    ls: () => {
      if (this.state.directory === "C:\\") {
        return (
          <div>
            <li>Internet.exe</li>
            <li>MS-DOS.exe</li>
            <li>Resume.pdf</li>
          </div>
        );
      }
    },
  };

  theme = {
    mytheme: {
      themeBGColor: "#080a07",
      themeToolbarColor: "#DBDBDB",
      themeColor: "#fcfcfc",
      themePromptColor: "#fcfcfc",
    },
  };
  divclick = async (x) => {
    this.props.windowset(x);
    // await this.setState({ z: this.props.active });
    //console.log(this.props[1.2], this.props[2.2], this.props[3.2]);
  };

  toogleClick = async () => {
    console.log(this.props);
    if (this.props[2]) {
      //   await this.props.windowclose(2);
      this.props.handleToggleClick(2);
    }
  };

  minimizewin = (x) => {
    this.props.Minimize(x);
  };
  handleButtonClick = (event) => {
    event.stopPropagation();
    this.props.Minimize(2);
  };

  toggleFullScreen = () => {
    //console.log(this.props);
    this.props.windowset(2);
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
      <div class=" cursor-pointer mx-0 my-0 h-[90%] drop-shadow-lg bg-white">
        <div
          class="grid grid-flow-col bg-[#000080] py-1 px-1  border-[2px] border-slate-100 "
          onClick={() => {
            this.divclick(2);
          }}
          onDrag={() => {
            this.divclick(2);
          }}
        >
          <div class="grid grid-flow-col">
            <div class="text-white text-xl/[22px] pl-1 self-start  mr-0.5 ">
              <strong>MS-DOS</strong>
            </div>
          </div>

          <div class=" grid grid-flow-col justify-end mr-0.5 self-center h-[20px]">
            <div
              onClick={this.handleButtonClick}
              class="px-2  ml-0.5  bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
              style={{
                borderLeftColor: "#fff",
                borderTopColor: "#fff",
                border: "2px solid #7c7c7c",
              }}
            ></div>

            <div
              onClick={this.toggleFullScreen}
              class="px-2 ml-0.5   bg-center bg-[#ccc] bg-no-repeat bg-[url('close-icon.png')]"
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
            this.divclick(2);
          }}
          className="body"
          class="bg-[#080A07] h-[100%]"
        >
          <ReactTerminal
            showControlBar={false}
            welcomeMessage={
              <div>
                <div>
                  Microsoft Windows [Version 10.0.22621.2134]
                  <br /> (c) Microsoft Corporation. All rights reserved.
                </div>
                <br />
              </div>
            }
            prompt={this.state.directory + ">"}
            commands={this.commands}
            themes={this.theme}
            theme="mytheme"
            errorMessage={(x) => {
              return (
                '"' +
                x +
                '"' +
                // eslint-disable-next-line
                " is not recognized as an internal or external command,\
              operable program or batch file."
              );
            }}
          />
        </div>
      </div>
    );

    return (
      <Rnd
        ref={(c) => {
          this.rnd = c;
        }}
        default={{
          x: 200,
          y: 100,
          width: 700,
          height: 500,
        }}
        minWidth={200}
        minHeight={190}
        bounds="window"
        style={{ zIndex: this.props[2.2] }}
      >
        <Box />
      </Rnd>
    );
  }
}
