import React from "react";

function Bio() {
  return (
    <div
      class="h-[100%] overflow-auto px-[15%]  font-normal font-sans"
      style={{ fontFamily: "MS Sans Serif" }}
    >
      <h1 className="text-center text-4xl font-bold mb-4 pt-4 font-sans">
        Hey 👋, Subinoy this side!
      </h1>
      <div className="">
        <p className="text-center mb-4">
          I'm a second-year Computer Science student driven by a fervent passion
          for technology. My sights are set on becoming a proficient Node.js
          Developer, leveraging my solid Web Development foundation. With two
          completed projects under my belt, I'm dedicated to practical growth.
          Enthralled by Cloud and Web Development, I'm on an unending quest to
          carve my niche in tech's dynamic realm.
        </p>
        <p className="text-center mb-4">
          My proactive spirit extends beyond coding—I've revitalized my college
          coding club and founded{" "}
          <a
            href="https://linktr.ee/devdotcom"
            target="_blank"
            rel="noreferrer noopener"
          >
            DevDotCom
          </a>
          , a thriving 500-member strong developer community. I foster growth,
          organize events, and competitions.
        </p>
        <p className="text-center mb-4">
          I also thrive as a Technical Writer. As a Freelance Technical Writer,
          I transform complex concepts into digestible content, bridging
          development and communication.
        </p>
      </div>
      <div class="list-none ">
        <h1 className="text-4xl font-bold mb-2 text-center py-4 ">
          💫 About Me 💫
        </h1>
        <div>
          <p
            className="mb-4 text-center font-sans"
            style={{ fontFamily: "MS Sans Serif" }}
          >
            <li>🔭 Currently pursuing BTech CSE</li>
            <li>🌱 Nodejs Developer </li>
            <li>
              🔨 Building{" "}
              <a
                href="https://linktr.ee/devdotcom"
                target="_blank"
                rel="noreferrer noopener"
              >
                DevDotCom
              </a>
            </li>
            <li>
              🔍 Freelance Technical Writer <br />
            </li>
            <li>
              ⏰ Winner of &nbsp;
              <a
                href="https://devfolio.co/statuscode0/dashboard"
                target="_blank"
                rel="noreferrer noopener"
              >
                StatusCode0(MLH Hackathon)
              </a>
            </li>
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2 text-center py-4">
            🌐 Socials 🌐
          </h1>
          <p className="text-sm mb-4 content-center text-center ">
            <a
              href="https://linkedin.com/in/heysubinoy"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
                className="inline-block mr-4 h-[30px]"
              />
            </a>{" "}
            <a
              href="https://twitter.com/heysubinoy"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt="Twitter"
                className="inline-block mr-4 h-[30px]"
              />
            </a>{" "}
            <a
              href="https://instagram.com/biswas.subinoy"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="Instagram"
                className="inline-block h-[30px]"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
