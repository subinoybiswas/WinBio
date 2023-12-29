import React from "react";
import Send from "./mail.png";
function Mail() {
  return (
    <div className=" flex flex-col bg-[#f1f5f9] h-[100%] items text-lg">
      <div className="bg-[#f1f5f9]">
        <div className="text-4xl border-b-2 px-2 ">Send a Message</div>
        <div className="flex pl-2 border-b-2">
          <div>From:</div>
          <input className="ml-1 bg-[#f1f5f9] outline-none w-[100%]"></input>
        </div>
        <div className="pl-2 border-b-2 border-grey flex items-center">
          <div>To: </div>
          <div className="pl-1 content-center">
            <div className="border-2 rounded text-sm bg-sky-200 "> Subinoy</div>
          </div>
        </div>

        <div className="flex pl-2 border-b-2">
          <div>Subject:</div>
          <input className="ml-1 bg-[#f1f5f9] outline-none w-[100%]"></input>
        </div>
      </div>
      <div className="flex-grow">
        <textarea className="w-[100%] h-[100%] outline-none p-2 border-black border-2 bg-[#f1f5f9]"></textarea>
      </div>
      <div className="flex flex-row justify-end items-center my-2">
        <div className="mx-2 outline px-2 active:outline-slate-300">Reset</div>
        <div className="flex flex-row px-2 items-center  m-1 outline active:outline-slate-300 ">
          <img src={Send} alt="Send" className="h-[20px] pr-1"></img>
          <div>Send</div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
