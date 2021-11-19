import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">CasperPad is the first official decentralized Launchpad built to launch next level projects on the Casper Network.
</h1>
          {/* <h2 className="App-text__body">
            I am a full stack web and mobile developer
          </h2> */}
        </div>
      </div>
    </>
  );
}

export default App;
