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
    exit: () => {
      this.toogleClick();
    },
    ls: () => {
      return (
        <div>
          <li>Explorer.exe</li>
          <li>MS-DOS.exe</li>
          <li>Resume.pdf</li>
        </div>
      );
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
      <div class=" cursor-pointer mx-0 my-0 h-[95%] drop-shadow-lg bg-white">
        <div class="bg-black grid grid-flow-col justify-between w-[100%] ">
          <div
            class="text-white px-2"
            onClick={() => {
              this.divclick(2);
            }}
          >
            MS-DOS
          </div>
          <div class=" grid grid-flow-col justify-end">
            <div
              onClick={(event) => this.minimizewin(2)}
              class=" cursor-pointer text-white px-2"
            >
              --
            </div>
            <div onClick={this.toggleFullScreen} class="text-white px-2">
              B
            </div>
            <div onClick={this.toogleClick} class="text-white px-2">
              X
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            this.divclick(2);
          }}
          className="body"
          class="bg-[#fcfcfc] h-[100%]"
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
