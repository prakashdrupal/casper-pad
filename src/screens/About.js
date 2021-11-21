import React from "react";
import "../assets/about.css";

function About() {
  return (
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          Hello, I'm{" "}
          <span className="about-text__title-big">Tej Prakash Prasad</span>.
        </div>
        <div className="about-text__title">
          I'm looking for <span className="about-text__title-big">Cool</span>{" "}
          works.
        </div>
        <div className="about-text__body">
          I'm a self-taught full stack developer who is always
          learning new things.
          <br />
          <br />I am fluent in HTML5/CSS3, JavaScript, Node.js, React, Redux,
          NextJs, Drupal, WordPress Firebase.
        </div>
        <div className="about-social">
          <div className="about-social__title">You can find me here</div>
          <div className="about-social__links">
            <a
              className="about-social__link"
              href="https://prakashdrupal.wordpress.com/"
              rel="noopener noreferrer"
              target="_blank">
              Blog
            </a>
            <a
              className="about-social__link"
              href="https://github.com/prakashdrupal"
              rel="noopener noreferrer"
              target="_blank">
              github
            </a>
            <a
              className="about-social__link"
              href="mailto:prasadejprakash172@gmail.com"
              rel="noopener noreferrer"
              target="_blank">
              email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
