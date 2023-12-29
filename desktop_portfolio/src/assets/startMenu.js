import React from "react";
import StartMenuLogo from "./win95Start.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";
import LinkedIn from "./linkedin.png";
import GitHub from "./github-sign.png";
import Resume from "./folder.png";
import Portfolio from "./briefcase.webp";
import Facebook from "./facebook.png";
const StartMenu = () => {
  class StartItem {
    constructor(name, logo, link) {
      this.name = name;
      this.logo = logo;
      this.link = link;
    }
  }
  const linkedin = new StartItem(
    "LinkedIn",
    LinkedIn,
    "https://www.linkedin.com/in/heysubinoy/"
  );
  const instagram = new StartItem(
    "Instagram",
    Instagram,
    "https://www.instagram.com/biswas.subinoy"
  );
  const twitter = new StartItem(
    "Twitter",
    Twitter,
    "https://twitter.com/heysubinoy"
  );
  const github = new StartItem(
    "GitHub",
    GitHub,
    "https://github.com/subinoybiswas"
  );
  const resume = new StartItem(
    "Resume",
    Resume,
    "https://drive.google.com/file/d/1p3MEOQUIvwDG5H6QbCb-UTtoWyQ9CnEh/view?usp=sharing"
  );
  const portfolio = new StartItem("Portfolio", Portfolio, "https://subinoy.me");
  const facebook = new StartItem(
    "Facebook",
    Facebook,
    "https://www.facebook.com/biswas.subinoy/"
  );

  const items = [
    linkedin,
    instagram,
    twitter,
    github,
    facebook,
    resume,
    portfolio,
  ];
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div class=" absolute h-[17.5rem] w-[12rem] border-t-2 border-b-2 border-l-2 border-r-2 border-s-2 bg-white left-0 bottom-10 z-[100]">
      <div class="grid grid-cols-6 ">
        <div className="relative bg-[#7b7d7b]">
          <img
            src={StartMenuLogo}
            alt="StartMenuLogo"
            className="absolute bottom-0"
          />
        </div>

        <div class="bg-black col-span-5 grid grid-flow-row auto-rows-max">
          {/* <div class="bg-blue-400 row-[span_16_/_span_16]">Hi</div> */}
          {items.map((item) => (
            // Conditionally render based on the value of the 'on' prop

            <div
              className="grid grid-cols-3 bg-[#c3c3c3] hover:bg-[#00007c] h-10 "
              onClick={() => openInNewTab(item.link)}
            >
              <img
                src={item.logo}
                alt={item.name}
                class="w-[30px] place-self-center"
              ></img>

              <div class=" col-span-2 py-1 text-[17px] font-black">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StartMenu;
