import React, { useState } from "react";
import Send from "./mail.png";
import emailjs from "@emailjs/browser";
function Mail() {
  const [formData, setFormData] = useState({
    from_name: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.from_name === "" ||
      formData.message === "" ||
      formData.subject === ""
    ) {
      console.log("Error");
      return;
    }
    emailjs
      .send(
        "service_5xgvc8a",
        "template_56r6ycf",
        formData,
        "lYdXEmYn4V4et0Q4x"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const reset = () => {
    setFormData({ from_name: "", subject: "", message: "" });
  };

  return (
    <div className=" flex flex-col bg-[#f1f5f9] h-[100%] items text-lg">
      <div className="bg-[#f1f5f9]" onSubmit={sendEmail} id="SubmitForm">
        <div className="text-4xl border-b-2 px-2 ">Send a Message</div>

        <div className="flex pl-2 border-b-2">
          <div>From:</div>
          <input
            className="ml-1 bg-[#f1f5f9] outline-none w-[100%]"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required="true"
          ></input>
        </div>
        <div className="pl-2 border-b-2 border-grey flex items-center">
          <div>To: </div>
          <div className="pl-1 content-center">
            <div className="border-2 rounded text-sm bg-sky-200 "> Subinoy</div>
          </div>
        </div>

        <div className="flex pl-2 border-b-2">
          <div>Subject:</div>
          <input
            className="ml-1 bg-[#f1f5f9] outline-none w-[100%]"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required="true"
          ></input>
        </div>
      </div>
      <div className="flex-grow">
        <textarea
          className="w-[100%] h-[100%] outline-none p-2 border-black border-2 bg-[#f1f5f9]"
          name="message"
          defaultValue={formData.message}
          onChange={handleChange}
          required="true"
        ></textarea>
      </div>

      <div className="flex flex-row justify-end items-center my-2">
        <div
          className="mx-2 outline px-2 active:outline-slate-300"
          onClick={reset}
        >
          Reset
        </div>
        <button
          className="flex flex-row px-2 items-center  m-1 outline active:outline-slate-300 "
          onClick={sendEmail}
        >
          <img src={Send} alt="Send" className="h-[20px] pr-1"></img>
          <div>Send</div>
        </button>
      </div>
    </div>
  );
}

export default Mail;
