import React from "react";
import Image from "./MyPic.jpg";
function Bio() {
  return (
    <div
      class="h-[100%] overflow-auto px-[15%]  font-normal font-sans"
      style={{ fontFamily: "MS Sans Serif" }}
    >
      <div class="flex justify-center">
        <img
          src={Image}
          alt="UserImage"
          class="h-[600px] w-[800px] object-cover object-top m-2"
        ></img>
      </div>
      <div className="">
        <h1 className=" text-4xl font-bold mb-4 pt-4 font-sans">
          Subinoy Biswas
        </h1>
        <p className="text-[12px]">
          Web Developer | Community Builder | Machine Learning Enthusiast | IOT
          Enthusiast
        </p>
        <p className="text-[14px]">Kolkata, India</p>
        <br></br>
        <p className="text-2xl mb-2 font-bold">About Me</p>
        <p className=" mb-4">
          I'm a second-year Computer Science student driven by a fervent passion
          for technology. My sights are set on becoming a proficient Node.js
          Developer, leveraging my solid Web Development foundation. With two
          completed projects under my belt, I'm dedicated to practical growth.
          Enthralled by Cloud and Web Development, I'm on an unending quest to
          carve my niche in tech's dynamic realm.
        </p>
      </div>
      <div>
        <p className="text-2xl mb-2 font-bold">StatusCode 0</p>
        <p>
          My Second try at a MLH Hackathon was a success. After a novice and
          unprepared approach at Diversion 2k22, I tried another time at
          StatusCode 0, a hacktahon organised by reknowned institues like IIIT
          Kalyani and IISER Kolkata. Our team presented incredible innovation
          with our project MedHelpAI, which is a 3D Humanoid Health Assistant
          with the power of Natural Language Processing.{" "}
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold">JISTech2K23</p>
        <p>
          JISTech2K23 is an yearly techfest organised by my college JIS College
          of Engineering. I participated in this event and showcased neumurous
          projects namely AarogyaDisha, BlindSightAI and endedup winning three
          awards. I'm extreamly grateful as it helped me with teamwork and as
          well as presentation skills.
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Web Developer</p>
        <p className="mb-2">
          I have created multiple fullstack projects as an Web Developer.
          Although I shine as Backend Developer. I have honed my skills in
          frontend with my expercince with Reactjs. I have plenty of experince
          with Nodejs, Expressjs, as well as experinece in Python Backends. I
          also have experience with databases of SQL and NoSQL solutions.
        </p>
        <p>
          I like to build proucts which my friends and families find useful.
          Here are some of my projects.
        </p>
        <div class="underline text-[#0000EE]">
          <a
            href="https://github.com/MenOfCultureSS0/YourMedic"
            target="_blank"
            rel="noreferrer"
          >
            [AarogyaDisha]
          </a>
          ,
          <a
            href="https://github.com/subinoybiswas/RishiGPT"
            target="_blank"
            rel="noreferrer"
          >
            [RishiGPT]
          </a>
          ,
          <a
            href="https://github.com/subinoybiswas/friend.ly"
            target="_blank"
            rel="noreferrer"
          >
            [Friendly]
          </a>
        </div>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Technical Writer</p>
        <p className="mb-2">
          In my three-month internship at MyInscribe Inc., I served as an intern
          Content Writer, focusing on blogs and articles. Transitioning into
          freelance technical writing, I continued producing engaging content
          that simplified intricate technical subjects. This experience
          showcases my ability to communicate complex ideas in a reader-friendly
          manner within the dynamic tech landscape.
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Resume</p>
        <div class="underline text-[#0000EE]">
          <a
            href="https://linkedin.com/in/heysubinoy"
            target="_blank"
            rel="noreferrer noopener"
          >
            [Click here to checkout my resume]
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Bio;
