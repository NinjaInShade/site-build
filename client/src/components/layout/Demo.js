// Libraries
import React from "react";

// CSS
import "../../css/Demo.css";

// Images
import TempVideoPlayer from "../../resources/template_video_player.svg";
import SquigglyLine from "../../resources/SquigglyLine.svg";

// Components
import Button from "../general/Button";

export default function Demo() {
  function onClickHandler() {
    console.log("click");
  }

  return (
    <section className="demo-section">
      <div className="demo-container">
        <div>
          <img src={TempVideoPlayer} alt="Video player" />
        </div>
        <div>
          <h1>
            Watch this demo to find out the{" "}
            <span>
              possibilities
              <img src={SquigglyLine} alt="Squiggly Line Under Text" />
            </span>
          </h1>
          <p>
            Site builder tries to cover all aspects of what a good website should have. This short demonstration showcases a little on what this tool
            has to offer.
          </p>
          <a href="#beginning">
            <Button larger onClick={onClickHandler}>
              I want to try
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
