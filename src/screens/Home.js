import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">I build projects to learn how code works. I've been involved in the IT industry as Open Source Developer.
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
