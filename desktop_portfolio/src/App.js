import "./App.css";
import Diamond from "../src/logo.svg";
import win from ".//winlogo.png";
import React, { useState } from "react";

function App() {
  return (
    <div class="flex bg-[#018281] min-h-screen">
      <div class="fixed left-0 text-white min-h-full w-[200px]">
        <div class=" text-center absolute left-0 mx-2.5 grid grid-flow-row  ">
          <div class=" hover:bg-teal-200 h-[80px] w-[80px] my-2.5 ">
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
      <div class="bg-[#C0C0C0] fixed bottom-0 left-0 right-0 h-10 text-[17px]">
        <div>
          <div class="border-t-2 border-s-2 border-white shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,1)] h-[28px] w-[70px] bg-[#C0C0C0] my-1.5 mx-1.5 left-0 grid grid-flow-col content-center">
            <img src={win} alt="Win" class="ml-1 mt-0.5 h-[20px] w-[20px]"></img>
            <div class="">Start</div>
          </div>
        </div>

        <div className="Time"></div>
      </div>
    </div>
  );
}

export default App;
