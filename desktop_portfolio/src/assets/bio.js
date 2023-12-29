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
          As a second-year Computer Science student, I am fueled by a fervent
          passion for technology. My goal is to become a proficient Node.js
          Developer, building upon my strong foundation in web development. With
          two completed projects showcasing my dedication to practical growth, I
          am particularly enthralled by Cloud and Web Development. I am on an
          unending quest to carve my niche in the dynamic realm of technology.
        </p>
      </div>
      <div>
        <p className="text-2xl mb-2 font-bold">StatusCode 0</p>
        <p>
          My second attempt at an MLH Hackathon proved successful. After a
          novice and unprepared approach at Diversion 2k22, I made a determined
          effort at StatusCode 0, a hackathon organized by renowned institutes
          such as IIIT Kalyani and IISER Kolkata. Our team presented an
          innovative project called MedHelpAI, a 3D Humanoid Health Assistant
          with the power of Natural Language Processing, showcasing our
          commitment to technological innovation and problem-solving.{" "}
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold">JISTech2K23</p>
        <p>
          JISTech2K23 is an annual tech fest organized by my college, JIS
          College of Engineering. I actively participated in the event,
          showcasing numerous projects, including AarogyaDisha and BlindSightAI,
          and remarkably won three awards. I am extremely grateful for this
          experience as it significantly enhanced my teamwork and presentation
          skills.
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Web Developer</p>
        <p className="mb-2">
          I have developed multiple full-stack projects as a web developer,
          excelling particularly in backend development. While my expertise
          shines in backend technologies such as Node.js, Express.js, and
          Python, I have honed my frontend skills with experience in React.js.
          Additionally, I possess substantial experience working with both SQL
          and NoSQL databases, showcasing a comprehensive understanding of
          database solutions.
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
          freelance technical writing, I continued to produce engaging content
          that simplified intricate technical subjects. This experience
          showcases my ability to communicate complex ideas in a reader-friendly
          manner within the dynamic tech landscape.
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Community Builder</p>
        <p className="mb-2">
          I successfully established DevDotCom, a thriving community with 1000+
          members, and played a pivotal role in revitalizing the JISCE Coding
          Club at our college. Through collaborative efforts, my team and I
          organized Coding Events and Workshops, culminating in the execution of
          Eastern India's Largest In-person Open Source Event. These experiences
          reflect my commitment to fostering a vibrant coding culture and
          community engagement.
        </p>
      </div>
      <br></br>
      <div>
        <p className="text-2xl mb-2 font-bold ">Resume</p>
        <div class="underline text-[#0000EE]">
          <a
            href="https://drive.google.com/file/d/1p3MEOQUIvwDG5H6QbCb-UTtoWyQ9CnEh/view?usp=sharing"
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
